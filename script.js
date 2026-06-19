new Chart(document.getElementById("dispersion"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });
			
			const nombresUniversidades = {
    "PUC": "PONTIFICIA UNIVERSIDAD CATOLICA DE CHILE",
    "PUCV": "PONTIFICIA UNIVERSIDAD CATOLICA DE VALPARAISO",
    "UAI": "UNIVERSIDAD ADOLFO IBAÑEZ",
    "UNAB": "UNIVERSIDAD ANDRES BELLO",
    "UACh": "UNIVERSIDAD AUSTRAL DE CHILE",
    "UBO": "UNIVERSIDAD BERNARDO O'HIGGINS",
    "UCT": "UNIVERSIDAD CATOLICA DE TEMUCO",
    "UA": "UNIVERSIDAD DE ANTOFAGASTA",
    "UNIACC": "UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION - UNIACC",
    "UCH": "UNIVERSIDAD DE CHILE",
    "ULS": "UNIVERSIDAD DE LA SERENA",
    "UDLA": "UNIVERSIDAD DE LAS AMERICAS",
    "UPLA": "UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION",
    "USACH": "UNIVERSIDAD DE SANTIAGO DE CHILE",
    "UTALCA": "UNIVERSIDAD DE TALCA",
    "UTA": "UNIVERSIDAD DE TARAPACA",
    "UV": "UNIVERSIDAD DE VALPARAISO",
    "UVM": "UNIVERSIDAD DE VIÑA DEL MAR",
    "UBB": "UNIVERSIDAD DEL BIO-BIO",
    "UDD": "UNIVERSIDAD DEL DESARROLLO",
    "UDP": "UNIVERSIDAD DIEGO PORTALES",
    "UFT": "UNIVERSIDAD FINIS TERRAE",
    "UGM": "UNIVERSIDAD GABRIELA MISTRAL",
    "UMAYOR": "UNIVERSIDAD MAYOR",
    "USM": "UNIVERSIDAD TECNICA FEDERICO SANTA MARIA",
    "UTEM": "UNIVERSIDAD TECNOLOGICA METROPOLITANA"
};
			new Chart(document.getElementById("barras apiladas"), {
                type: "bar",
                data: {
                    labels: ["PUC", "PUCV", "UAI", "UNAB", "UNAB", "UNAB", "UNAB", "UACh", "UBO", "UCT", "UA", "UNIACC", "UNIACC", "UNIACC", "UNIACC", "UCH", "UCH", "ULS", "UDLA", "UPLA", "USACH", "USACH", "UTALCA", "UTA", "UV", "UVM", "UBB", "UBB", "UDD", "UDD", "UDD", "UDP", "UFT", "UFT", "UFT", "UGM", "UGM", "UGM", "UGM", "UGM", "UMAYOR", "USM", "USM", "USM", "UTEM", "UTEM"],
                    
                    datasets: [
              				   {
                                label: 'Costo Total por Arancel',
                                data: [40400000, 34575000, 29264076, 20276000, 28544000, 28592000, 28260000, 29435000, 29500000, 26380000, 25600000, 18320000, 16840000, 16120000, 16840000, 32433500, 27462000, 20355000, 23650000, 21525000, 32760000, 24945000, 29435000, 26220000, 28565000, 21385000, 21535000, 22170000, 10364360, 48773460, 30280190, 37985000, 36600000, 36600000, 14400000, 14442000, 24070000, 24070000, 24070000, 24070000, 36071090, 30000000, 30000000, 20720000, 23816500, 24455000],
                                backgroundColor: "rgba(241,142,45,.75)",
                                borderColor: "rgba(245,142,45, 1)",
                                borderWidth: 1
                               },
           				       {
                                label: 'Costo de Titulacion',
                                data: [0, 134700, 81289, 0, 0, 0, 0, 285000, 452023, 138753, 490000, 400000, 400000, 400000, 400000, 0, 0, 0, 384000, 218000, 416000, 416000, 258700, 205000, 184000, 88100, 80000, 80000, 0, 40645, 40645, 318000, 371289, 335289, 364000, 481000, 454000, 454000, 454000, 454000, 250000, 129000, 129000, 129000, 215500, 215500],
                                backgroundColor: "rgba(0,162,235,.75)",
                                borderColor: "rgba(0,162,235, 1)",
                                borderWidth: 1
                               },
							 ] 
					},
                        
           options: {
			  responsive: true,
			  maintainAspectRatio: false,
              scales: {
                   x: {
                       stacked: true,
					   ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                }
                      },
                   y: {
					   stacked: true,
					   ticks: {
                           beginAtZero: true,
						   font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
									}
                              }
					  }
                     },
                    
					
			plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
					title: function(context) {
                           const sigla = context[0].label;
                           return nombresUniversidades[sigla] || sigla;
                          },
                    label: function (context) {
                        let tipoCosto = context.dataset.label || ''; 
                        let valor = context.raw;
                        return tipoCosto + ": $ " + valor.toLocaleString("es-CL");
                    },
                }
            }
        }
      }
    });
