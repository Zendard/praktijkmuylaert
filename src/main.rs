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

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, contact])
        .mount("/", rocket::fs::FileServer::from("public"))
}
