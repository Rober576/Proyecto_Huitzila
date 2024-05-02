<?php
ini_set('display_errors', 1);
//importar los archivos necesarios
use PhpOffice\PhpSpreadsheet\Style\Color;

require '../../controller/CrearExcel/vendor/autoload.php';

$color = new Color('000000');

//crear el objeto des excel
$spreadsheet = new PhpOffice\PhpSpreadsheet\Spreadsheet();

//establecer las propiedades del archivo
$spreadsheet->getProperties()->setTitle("Movimientos de Mezcal Lote  XXXX")->setCreator("Casa Mezcal Huitzila")
->setCategory("Movimientos de Mezcal")->setCompany("Casa Mezcal Huitzila")->setLastModifiedBy("Casa Mezcal Huitzila");

//establecer la hoja en la que vamos a trabajar
$spreadsheet->setActiveSheetIndex(0)->setTitle("Movimientos Mezcal");
$hoja = $spreadsheet->getActiveSheet();

//poner los titulos
$hoja -> setCellValue('F1', "CASA MEZCAL HUITZILA S.A DE C.V.") -> setCellValue("F3", "BITÁCORA DE ALMACEN DE GRANELES EN FÁBRICA") -> 
    setCellValue("J4", "MEZCAL 100% AGAVE");

 //poner estilo a los titulos
$hoja->mergeCells('F1:Q1'); //unir celdas
$hoja->mergeCells('F3:Q3');
$hoja->mergeCells('J4:M4');
$estilo = $hoja->getStyle('F1:J4');
$estilo->getFont()->setBold(true)->setSize(12)->getColor()->setARGB('FF000000');
$estilo->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER); //centra el contenido horizontalmente
$estilo->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER); //centra el contenido verticalmente
$estilo->getFont()->setName("Times New Roman")->setSize(12); //cambiar el tipo de letra y tamaño

//encabezados lugar y responsable
$hoja -> setCellValue('C6', "LUGAR: LOPEZ MATEOS, HUITZILA, TEÚL DE GONZÁLEZ ORTEGA, ZACATECAS ") -> 
setCellValue("C7", "RESPONSABLE: LQ. JILBERTO DAVILA PUENTES");

$estilo = $hoja->getStyle('C6:C7');
$estilo->getFont()->setBold(true)->setSize(12)->getColor()->setARGB('FF000000');
$estilo->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT); // alinea el contenido a la izquierda
$estilo->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER); // centra el contenido verticalmente
$estilo->getFont()->setName("Times New Roman")->setSize(12); // cambia el tipo de letra y tamaño
$estilo->getFont()->setUnderline(\PhpOffice\PhpSpreadsheet\Style\Font::UNDERLINE_SINGLE); // aplica subrayado

//poner los encabezados de las columnas
$hoja -> setCellValue('B9', "Fecha") -> setCellValue("C9", "No. de Lote") -> setCellValue("D9", "# Análisis Fisicoquímico")-> setCellValue("E9", "Categoría")-> 
    setCellValue("F9", "Clase")-> setCellValue("G9", "Tanque")-> setCellValue("H9", "Inventario Inicial")-> setCellValue("H10", "Volumen")-> 
    setCellValue("I10", "% Alc. Vol.")-> setCellValue("J9", "Entradas")-> setCellValue("J10", "Procedencia")-> setCellValue("K10", "Volumen")-> 
    setCellValue("L10", "% Alc. Vol.")-> setCellValue("M10", "Volumen de agua")-> setCellValue("N9", "Salidas")-> setCellValue("N10", "Destino")-> 
    setCellValue("O10", "Volumen")-> setCellValue("P10", "% Alc. Vol.")-> setCellValue("Q9", "Mermas o saldo a favor")-> setCellValue("Q10", "Volumen")-> 
    setCellValue("R10", "% Alc. Vol.")-> setCellValue("S10", "Vol. a 55% Alc. Vol.")-> setCellValue("T9", "Inventario final teórico")-> 
    setCellValue("T10", "Volumen")-> setCellValue("U10", "% Alc. Vol.");

$hoja->mergeCells('B9:B10'); //unir celdas
$hoja->mergeCells('C9:C10'); 
$hoja->mergeCells('D9:D10'); 
$hoja->mergeCells('E9:E10'); 
$hoja->mergeCells('F9:F10'); 
$hoja->mergeCells('G9:G10'); 
$hoja->mergeCells('H9:I9'); 
$hoja->mergeCells('J9:M9'); 
$hoja->mergeCells('N9:P9'); 
$hoja->mergeCells('Q9:S9'); 
$hoja->mergeCells('T9:U9'); 

$estilo = $hoja->getStyle('B9:U10');
$estilo->getFont()->setBold(true)->setSize(12)->getColor()->setARGB('FF000000');
$estilo->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
$estilo->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
$estilo->getFont()->setName("Times New Roman")->setSize(12);
$estilo->getAlignment()->setWrapText(true); // Agrega la propiedad de ajustar texto
// Agregar bordes
$bordeEstilo = [
    'borders' => [
        'allBorders' => [
            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
        ],
    ],
];
$estilo->applyFromArray($bordeEstilo);


//crear un objeto de estilo para ajustar el texto de descripcion
$style = [
    'alignment' => [
        'wrapText' => true]];

//AQUI VA EL CUERPO ----------------------------- FALTA


//definir los tamaños de las columnas
$hoja->getColumnDimension('A')->setWidth(10);
$hoja->getColumnDimension('B')->setWidth(15);
$hoja->getColumnDimension('C')->setWidth(15);
$hoja->getColumnDimension('D')->setWidth(15);
$hoja->getColumnDimension('E')->setWidth(15);
$hoja->getColumnDimension('F')->setWidth(15);
$hoja->getColumnDimension('G')->setWidth(15);
$hoja->getColumnDimension('H')->setWidth(15);
$hoja->getColumnDimension('I')->setWidth(15);
$hoja->getColumnDimension('J')->setWidth(15);
$hoja->getColumnDimension('K')->setWidth(15);
$hoja->getColumnDimension('L')->setWidth(15);
$hoja->getColumnDimension('M')->setWidth(15);
$hoja->getColumnDimension('N')->setWidth(15);
$hoja->getColumnDimension('O')->setWidth(15);
$hoja->getColumnDimension('P')->setWidth(15);
$hoja->getColumnDimension('Q')->setWidth(15);
$hoja->getColumnDimension('R')->setWidth(15);
$hoja->getColumnDimension('S')->setWidth(15);
$hoja->getColumnDimension('T')->setWidth(15);
$hoja->getColumnDimension('U')->setWidth(15);
$hoja->getRowDimension(9)->setRowHeight(30);
$hoja->getRowDimension(10)->setRowHeight(30);

//guardar el archivo
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="Movimientos de Mezcal Lote XXXX'. '.Xlsx"');
header('Cache-Control: max-age=0');

$writer = PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
$writer->save('php://output');
?>