import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      //paperSize: 'Letter',
      //orientation: 'landscape',
      paperSize:"auto",
      fileName: 'mySched.pdf',
      margin: 3

    })
  }
}

const Doc = new DocService();
export default Doc;