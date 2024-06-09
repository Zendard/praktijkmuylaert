use std::path::Path;

use rocket::fs::NamedFile;
#[macro_use]
extern crate rocket;

const FILES_DIR: &'static str = env!("ROCKET_FILES_DIR");
// const FILES_DIR: &'static str = "ROCKER_FILES_DIR";

#[get("/")]
async fn index() -> Option<NamedFile> {
    NamedFile::open(Path::new(FILES_DIR).join("views").join("index.html"))
        .await
        .ok()
}

#[get("/contact")]
async fn contact() -> Option<NamedFile> {
    NamedFile::open(Path::new(FILES_DIR).join("views").join("contact.html"))
        .await
        .ok()
}

#[get("/kinesitherapie")]
async fn kine() -> Option<NamedFile> {
    NamedFile::open(Path::new(FILES_DIR).join("views").join("kine.html"))
        .await
        .ok()
}

#[get("/osteopathie")]
async fn osteo() -> Option<NamedFile> {
    NamedFile::open(Path::new(FILES_DIR).join("views").join("osteo.html"))
        .await
        .ok()
}

#[catch(404)]
async fn not_found() -> Option<NamedFile> {
    NamedFile::open(Path::new(FILES_DIR).join("views").join("404.html"))
        .await
        .ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index, contact, kine, osteo])
        .register("/", catchers![not_found])
        .mount(
            "/",
            rocket::fs::FileServer::from(Path::new(FILES_DIR).join("public")),
        )
}
