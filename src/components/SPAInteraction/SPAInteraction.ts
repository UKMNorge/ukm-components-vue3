import $ from "jquery";

export default class SPAInteraction {
    baseURL: string;
    interactionObjekt: any;

    /**
     * Represents the UKMOnePage functionality.
     * @constructor
     * @param interactionObjekt - Et objekt som representer interaction og har metoder: 
     *  showMessage(title, message, type), openDialog(title, msg, buttons) og hideLoading()
     */
    constructor(interactionObjekt: any, baseURL: string = '/api/') {
        if(interactionObjekt === undefined && interactionObjekt === null){
            if(!this.checkInteractionObjekt(interactionObjekt)) {
                throw new Error('interactionObjekt is not defined or does not have the correct methods');
            }
        }
        this.baseURL = baseURL;
        this.interactionObjekt = interactionObjekt;
    }

    private checkInteractionObjekt(interactionObject : any) : boolean {
        // Check methods
        if(interactionObject.showMessage === undefined || interactionObject.hideLoading === undefined) {
            return false;
        }
        return true;
    }

    // Interaction
    private _showElementDOM(el: any): void {
        // ...
    }

    removeElementFromDOM(el: any): void {
        $(el).fadeOut();
    }

    removeElementFromDOMSlideUp(el: any): void {
        $(el).animate(
            {'min-height': 0, 'max-height': 0, height: 0, padding: 0, margin: 0}, 400, () => {
                this.removeElementFromDOM(el);
            });
    }

    appendHTML(el: any, html: string): void {
        $(el.append(html));
    }

    fadeElementDOM(el: any): void {
        $(el).css('opacity', '.5');
    }    

    showMessage(title: string, message: string, type: number): void { // -1 -> 'error', 0 -> 'normal', 1 -> 'warning'
        if (this.interactionObjekt) {
            this.interactionObjekt.showMessage(title, message, type);
        } else {
            console.warn('interactionObjekt has not been found!');
        }
    }

    showDialog(title: string, msg: string, buttons: any, onCloseCallback: any): void {
        if (this.interactionObjekt) {
            this.interactionObjekt.openDialog(title, msg, buttons, onCloseCallback);
        } else {
            console.warn('interactionObjekt has not been found!');
        }
    }

    showLoading(): void {
        if (this.interactionObjekt) {
            this.interactionObjekt.showLoading();
        } else {
            console.warn('interactionObjekt has not been found!');
        }
    }

    hideLoading(): void {
        if (this.interactionObjekt) {
            this.interactionObjekt.hideLoading();
        } else {
            console.warn('interactionObjekt has not been found!');
        }
    }

    isJson(res: string): boolean {
        try {
            JSON.parse(res);
        } catch (e) {
            return false;
        }
        return true;
    }

    // Server communication
    async runAjaxCall(url: string, method: string, data: any, event: any = null): Promise<any> {
        let getData: any[] = [];

        if (method === 'GET' && Object.keys(data).length > 0) {
            for (let key in data) {
                getData.push(data[key]);
            }
        }

        // event is the event where the call has been triggered.
        // if the element is button then a loader will be added
        let button: any = event ? $(event.target).parent().parent().find('button')[0] : null;
        if (button) {
            $(button).find('.spinner-border').detach();
            $(button).append('<div class="spinner-border" role="status"><span class="sr-only"></span></div>');
        }

        return new Promise((resolve, reject) => {
            let _this = this;
            $.ajax({
                url: this.baseURL + url,
                method: method,
                data: method === 'GET' ? {} : data,
                success: (res: any) => {
                    $(button).find('.spinner-border').detach();
                    if (this.isJson(res)) {
                        resolve(JSON.parse(res));
                    } else {
                        resolve(res);
                    }
                }
            }).fail((res: any) => {
                // The call has returned an error, remove the spinner
                $(button).find('.spinner-border').detach();

                if (res.statusCode().status === 500) {
                    if (res.responseJSON.errorMessage) {
                        this.interactionObjekt.showMessage('Prosessen kan ikke utføres!', res.responseJSON.errorMessage, 'error');
                    }
                } else if (res.statusCode().status === 400) {
                    this.interactionObjekt.showMessage('Det er noe som mangler!', res.responseJSON.errorMessage, 'error');
                }

                this.interactionObjekt.hideLoading();

                reject(res);
            });
        });
    }
}
