self.addEventListener("install", () => {
    console.log("SW", "Instalado")
}) 

self.addEventListener("activate", () => {
    console.log("SW", "activado")
}) 

self.addEventListener("fetch", () => {
    console.log("SW", "Fetch")
}) 