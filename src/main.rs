use rocket::fs::NamedFile;
#[macro_use]
extern crate rocket;

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open("views/index.html").await.ok()
}

#[get("/contact")]
async fn contact() -> Option<NamedFile> {
    NamedFile::open("views/contact.html").await.ok()
}

#[get("/kinesitherapie")]
async fn kine() -> Option<NamedFile> {
    NamedFile::open("views/kine.html").await.ok()
}

#[catch(404)]
async fn not_found() -> Option<NamedFile> {
    NamedFile::open("views/404.html").await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, contact, kine])
        .register("/", catchers![not_found])
        .mount("/", rocket::fs::FileServer::from("public"))
}
