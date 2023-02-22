'use strict';

class planCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["title", "price", "account", "benefit", "terms"];
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
            if (attr === "benefit") {
                this.benefit = newVal;
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
            <span>1 mes gratis</span>
            <div class="plan-info">
                <h2>${this.title}</h2>
                <p>${this.price} €/mes tras el periodo de la oferta</p>
                <p>${this.account}</p>
            </div>
            <ul class="benefits">
                <li>${this.benefit}</li>
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
        :host {
            list-style: none;
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