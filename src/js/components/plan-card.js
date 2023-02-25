class planCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return [ "title", "price", "account", "benefits", "terms" ];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal) {
            this[attr] = newVal;

            if (attr === "title") {
                this.title = newVal;
            }
            if (attr === "price") {
                this.price = newVal;
            }
            if (attr === "account") {
                this.account = newVal;
            }
            if (attr === "benefits") {
                this.benefits = newVal;
            }
            if (attr === "terms") {
                this.terms = newVal;
            }
      }  
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <li class="plan-card">
            <div class="plan-info">
                <span class="month"><p>1 mes gratis</p></span>
                <h2>${this.title}</h2>
                <p>${this.price} €/mes tras el periodo de la oferta</p>
                <p>${this.account}</p>
            </div>
            <ul class="benefits">
                <li>${this.benefits}</li>
            </ul>
            <button class="btn">Empezar</button>
            <p class="terms">${this.terms}</p>
        </li>
        ${this.getStyles()}
      `;
        return template;
    }

    getStyles() {
        return `
        <style>
        :host {}

        *{box-sizing: border-box;
            margin: 0;
            padding: 0;
            list-style: none;
            text-decoration: none;
        }

        .plan-card{
            width: 270px;
            height: 580px;
            padding: 15px;
            margin-bottom: 50px;
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .month{
            width: 100px;
            display: flex;
            padding: 4px;
            border-radius: 5px;
            justify-content: center;
            background-color: #0D72EA;
            margin-bottom: 10px; 
        }
        .month p{
            color: white;
            font-size: 13px;
            font-weight: 700;
        }

        .plan-info{
            border-bottom: 1px solid black;
            padding-bottom: 20px;
        }
        .plan-info p{
            font-size: 14px;
        }

        .benefits{
            height: 170px;
            margin: 20px 0px 20px 0px;
            font-size: 14px;
        }

        .btn{
            outline: none;
            cursor: pointer;
            border: none;
            padding: 0.8rem 1rem;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            text-transform: uppercase;
            position: relative;
            display: inline-block;
            letter-spacing: 0.05rem;
            font-weight: 400;
            font-size: 15px;
            border-radius: 500px;
            overflow: hidden;
            background: black;
            color: white;
            margin-bottom: 15px;
        }

        .terms{
            font-size: 10px;
            color: rgb(109, 108, 108);
        }
        
        @media (max-width: 1080px) {
            
        }
        </style>
      `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("plan-card", planCard);