new Chart(document.getElementById("grafico 1"), {
                type: "pie",
	            data: {
                labels: ["Diseño","Visual y Medios","Industrial y Servicios"],
	            datasets: [{
					label: "MENCIONES DE TITULADOS 2023 - 2025",
					data: [43, 165, 126],
					backgroundColor: [
						'#ffcd56', // Amarillo
                        '#ff9f40', // Naranja
                        '#4bc0c0'  // Verde agua
						],
				    borderWidth: 2,
                    borderColor: '#ffffff' // Línea divisoria blanca entre porciones
                        }]
					    }
                        });
					
			
			new Chart(document.getElementById("barras apiladas"), {
                type: "bar",
                data: {
                    labels: [ 
						    ["Lenguajes Visuales", "y Narrativas"], 
					        ["Gestión y", "Fabricación Avanzada"], 
					        ["Territorios", "y Ciudadanias"], 
					        ["Gestión Estratégia", "y Sistemas Complejos"],
					        "Otros diseños"],
                    
                    datasets: [
              				   {
                                label: 'Visualidad y Medios',
                                data: [17, 0, 4, 9, 29],
                                backgroundColor: "rgba(241,142,45,.75)",
                                borderColor: "rgba(245,142,45, 1)",
                                borderWidth: 1
                               },
						       {
								label: 'Ambas',  
								data: [8, 1, 16, 11, 15],
								backgroundColor: "rgba(75, 192, 192, 0.75)", // Verde agua
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1
							   },	   
						       {
								label: 'Industrial y Servicios',
								data: [0, 56, 4, 4, 0],
							    backgroundColor: "rgba(0, 162, 235, 0.75)",
                                borderColor: "rgba(0, 162, 235, 1)",
                                borderWidth: 1
							   },
							 ] 
					},
                        
           options: {
			  responsive: true,
			  maintainAspectRatio: false,
              scales: {
                   x: {
                       stacked: false,
					   ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                              }
                      },
                   y: {
					   stacked: false,
					   title: {
						   display: true,
						   text: "Cantidad de Electivos",
						   color: "#999",
						   font: { family: "'Georama', sans-serif", size: 11 },
							   
					   ticks: {
                           beginAtZero: true,
						   font: { family: "'Georama', sans-serif", size: 11 },
                           color: "#999",
							   }
					   }
                    },
                    			
			plugins: {
              legend: { 
				       display: true, 
			           position: "top",
				       labels: {
                                font: { family: "'Georama', sans-serif", size: 12 }
			                   },
				     
                      }
                    }
		          }
			    });
