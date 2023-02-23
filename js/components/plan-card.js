
class planCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["title","price", "account", "benefits", "terms"];
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
            <span class="month"><p>1 mes gratis</p></span>
            <div class="plan-info">
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
            height: 600px;
            padding: 15px;
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .month{
            width: 110px;
            display: flex;
            padding: 5px;
            border-radius: 5px;
            justify-content: center;
            background-color: #0D72EA; 
        }
        .month p{
            color: white;
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }
        .benefits{
            list-style: none;
        }

        .btn{
            outline: none;
            cursor: pointer;
            border: none;
            padding: 0.9rem 2rem;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            text-transform: uppercase;
            position: relative;
            display: inline-block;
            letter-spacing: 0.05rem;
            font-weight: 700;
            font-size: 17px;
            border-radius: 500px;
            overflow: hidden;
            background: black;
            color: ghostwhite;
        }

        .terms{
            font-size: 12px;
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