import css from './knowledge-base.css.js';
import html from './knowledge-base.html.js';

export default class ComponentKnowledge extends HTMLElement {
    template;

    constructor() {
        super();
    }

    connectedCallback() {
        //Obligatory render call
        this.render();

        //Add iFrame loaded listener
        document.querySelector("iframe").addEventListener("load", this.frameLoaded.bind(this));

    }

    disconnectedCallback() {
        //Remove iFrame loaded listener
        document.querySelector("iframe").removeEventListener("load", this.frameLoaded);
    }   

    /**
     * Called when iframe has loaded 
     */ 
    frameLoaded(){
        this.hideSpinner();
    }

    showSpinner(){
        document.querySelector('.c-spinner').classList.remove('slds-hide');
    }

    hideSpinner(){
        document.querySelector('.c-spinner').classList.add('slds-hide');
    }

    /**
     * Observed Attributes
     */ 
    static get observedAttributes() {
        return [''];
    }
    /**
     * On attribute change listener
     */ 
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            console.log(`${name} changed from ${oldVal} to ${newVal}`);
            //Re-render template if attributes change
            this.render();
        }
    }

    /**
     * Main template renderer
     */ 
    render(){
        let templateElement = this.getTemplateElement();

        /* do not attach to shadow root */
        // if(this.template){
        //     this.template.innerHTML = '';
        // }else{
        //     this.template = this.attachShadow({mode: 'closed'});
        // }
        // this.template.appendChild(templateElement.content.cloneNode(true));
        /* do not attach to shadow root */
        this.innerHTML = templateElement.innerHTML;
    }

    /**
     * Get element HTML 
     */ 
    getTemplateElement() {
        let templateElement = document.createElement('template');
        templateElement.innerHTML = `
            <style>
                ${css.bind(this).call()}
            </style>
            ${html.bind(this).call()}
        `;
        return templateElement;
    } 
    
    reportValidity(){
        return true;
    }

    checkValidity(){
        return this.reportValidity();
    }
}

window.customElements.define('c-knowledge-base', ComponentKnowledge);