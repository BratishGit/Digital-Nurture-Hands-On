public class Main {
    public static void main(String [] args){
    
        DocumentFactory WordFactory = new WordFactory();
        DocumentFactory PdfFactory =new PdfFactory();
        DocumentFactory ExcelFactory =new ExcelFactory();

        Document doc1= WordFactory.createDocument();
        Document doc2= PdfFactory.createDocument();
        Document doc3= ExcelFactory.createDocument();

        doc1.open();
        doc2.open();
        doc3.open();
    }
}
