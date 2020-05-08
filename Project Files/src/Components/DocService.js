//importing libraries
//Author: Simran Bhamra
import { savePDF } from '@progress/kendo-react-pdf';


//Doc service by kendo react pdf to create the pdf document
class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      
      paperSize:"auto",
      fileName: 'mySched.pdf',
      margin: 3

    })
  }
}

const Doc = new DocService();
export default Doc;