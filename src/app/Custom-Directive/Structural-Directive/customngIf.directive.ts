import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[customNgIf]"
})

export class CustomNgIfDirective{
    @Input() set customNgIf(condition:boolean){
        if(condition){
            this.vcRef.createEmbeddedView(this.template);
        }
        else{
            this.vcRef.clear();
        }
    }

    constructor(private template : TemplateRef<any>, private vcRef : ViewContainerRef){}
}