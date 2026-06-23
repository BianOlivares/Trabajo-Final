            const t = document.querySelector("#este");
            const URL = "https://api.myjson.online/v1/records/66a34375-25a0-4ac6-962c-b1af8bffc490";

            fetch(URL)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    var trabajo = datos.data;
                    console.log(trabajo);
                    trabajo.forEach((x) => {
                        t.innerHTML += `<tr style="${x.ok == 1 ? "background-color: var(--color-iluminadisimo); color: var(--color-oscurisimo)" : ""}"><td>${x.id}</td><td>${x.name}</td><td>${x.track}</td><td>${x.subgroup}</td><td>${x.group}</td></tr>`;
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            function sinAcentos(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }

            document.getElementById("elInput").addEventListener("keyup", function () {
                const valor = sinAcentos(this.value.toLowerCase());
                document.querySelectorAll("#este tr").forEach(function (fila) {
                    fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
                });
            });
