import { Component, ViewChild } from '@angular/core';
declare var kendo: any;
@Component({
    selector: 'my-app',
    template: `
            <div #pdfViewer></div>
    `,
    styles: [`
      .k-overflow-anchor {
        &:focus {
            outline: solid 2px $primary;
        &:hover {
            background-color: #ecf0f7;
        }
    }
    }`]
})
export class AppComponent {
  @ViewChild('pdfViewer', { static: false }) private pdfViewer;

  ngAfterViewInit() {
      kendo.jQuery(this.pdfViewer.nativeElement).kendoPDFViewer({
      pdfjsProcessing: {
        file: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
      },
      width: "100%",
      height: 1200
    })
  }

}
