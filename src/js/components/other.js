// class planCard extends HTMLElement {
//     constructor() {
//       super();
  
//       // Creamos un shadow root y le agregamos los estilos y la lista vacía
//       const shadow = this.attachShadow({ mode: 'open' });
//       const styles = `
//         *{box-sizing: border-box;
//             margin: 0;
//             padding: 0;
//             list-style: none;
//             text-decoration: none;
//         }

//         .plan-card{
//             width: 270px;
//             height: 580px;
//             padding: 15px;
//             margin-bottom: 50px;
//             background-color: white;
//             display: flex;
//             flex-direction: column;
//             border-radius: 10px;
//             box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//         }

//         .month{
//             width: 100px;
//             display: flex;
//             padding: 4px;
//             border-radius: 5px;
//             justify-content: center;
//             background-color: #0D72EA;
//             margin-bottom: 10px; 
//         }
//         .month p{
//             color: white;
//             font-size: 13px;
//             font-weight: 700;
//         }

//         .plan-info{
//             border-bottom: 1px solid black;
//             padding-bottom: 20px;
//         }
//         .plan-info p{
//             font-size: 14px;
//         }

//         .benefits{
//             height: 170px;
//             margin: 20px 0px 20px 0px;
//             font-size: 14px;
//         }

//         .btn{
//             outline: none;
//             cursor: pointer;
//             border: none;
//             padding: 0.8rem 1rem;
//             margin: 0;
//             font-family: inherit;
//             font-size: inherit;
//             text-transform: uppercase;
//             position: relative;
//             display: inline-block;
//             letter-spacing: 0.05rem;
//             font-weight: 400;
//             font-size: 15px;
//             border-radius: 500px;
//             overflow: hidden;
//             background: black;
//             color: white;
//             margin-bottom: 15px;
//         }

//         .terms{
//             font-size: 10px;
//             color: rgb(109, 108, 108);
//         }
        
//         @media (max-width: 1080px) {
            
//         }
//       `;
        
//       const plansList = document.createElement('ul');
//       shadow.appendChild(plansList);
  
  
//       // Inicializamos la lista vacía
//       this.data = [];
//     }
  
//     // Definimos una propiedad "datos" para poder actualizar la lista
//     set data(newData) {
//       this._data = newData;
//       this.render();
//     }
  
//     get data() {
//       return this._data;
//     }
  
//     // Renderizamos la lista con los datos actualizados
//     render() {
//         const plansList = this.shadowRoot.querySelector('ul');
//         let html = '';
  
//         this.datos.forEach(plan => {
//             let benefitsHtml = '';
//             plan.benefits.forEach(benefit => {
//                 benefitsHtml += `<li>${benefit}</li>`;
//             })
//           html += `<li class="plan-card">
//                     <div class="plan-info">
//                         <span class="month"><p>1 mes gratis</p></span>
//                         <h2>${plan.title}</h2>
//                         <p>${plan.price} €/mes tras el periodo de la oferta</p>
//                         <p>${plan.account}</p>
//                     </div>
//                     <ul class="benefits">${benefitsHtml}</ul>
//                     <button class="btn">Empezar</button>
//                     <p class="terms">${plan.terms}</p>
//                 </li>
//           `;
//       });
  
//       plansList.innerHTML = html;
//     }
//   }
  
// customElements.define('plan-card', planCard);