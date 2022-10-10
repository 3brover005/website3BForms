import css from './products-compare.css.js';
import html from './products-compare.html.js';

export default class ComponentProductsCompare extends HTMLElement {
    template;

    features = [
        {name:'Native', title: 'Is it a native application?', property:'native'},
        // {name:'PDF Support', title: 'Does the app support PDF generation?', property:'pdfSupport'},
        {name:'Price', title: 'Cost', property:'price'},
    ];

    products = [
        {name: '123FormBuilder', link:'https://www.123formbuilder.com/', native:'No', price:'$$', pdfSupport: 'Yes'},
        {name: 'Youreka', link:'https://youreka.io/', native:'No', price:'$$', pdfSupport: 'Yes'},
        {name: 'Formassembly', link:'https://www.formassembly.com/', native:'No', price:'$$$', pdfSupport: 'Yes'},
        {name: 'Formstack', link:'https://www.formstack.com/', native:'No', price:'$$$', pdfSupport: 'Yes'},
        {name: 'Titan', link:'https://formtitan.com/', native:'No', price:'$$$$', pdfSupport: 'Yes'}
    ];

    docsProduct = {
        name: '3B Forms', link:'https://www.3bforms.com/', native:'Yes', price:'FREE', pdfSupport: 'Partial'
    }

    constructor() {
        super();
    }

    connectedCallback() {
        //Obligatory render call
        this.render();
    }

    disconnectedCallback() {
        //Remove Event Listeners
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
        if(this.template){
            this.template.innerHTML = '';
        }else{
            this.template = this.attachShadow({mode: 'closed'});
        }
        this.template.appendChild(templateElement.content.cloneNode(true));
        /* do not attach to shadow root */
        // this.innerHTML = templateElement.innerHTML;
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

window.customElements.define('c-products-compare', ComponentProductsCompare);