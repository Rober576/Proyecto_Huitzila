<?php
ini_set('display_errors', 1);
//importar los archivos necesarios
use PhpOffice\PhpSpreadsheet\Style\Color;

include_once('../../model/Produccion/Mostrar_Movimiento_General_Mezcal.php');
require '../../controller/CrearExcel/vendor/autoload.php';

$color = new Color('000000');

//consulta para obtener los datos
$base = new MostrarMez();
$base->instancias();
$lote = $_GET['lote']; 

//crear el objeto des excel
$spreadsheet = new PhpOffice\PhpSpreadsheet\Spreadsheet();

//establecer las propiedades del archivo
$spreadsheet->getProperties()->setTitle("Movimientos de Mezcal Lote ".$lote)->setCreator("Casa Mezcal Huitzila")
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


//Extraemos los datos
//
if ($_GET['fecha_inicio']=='x'){
    
    $resultado1=$base->buscador_menor($lote);
    foreach ($resultado1 as $fila1){
        $fecha=$fila1["fecha"];
    }

    $resultado3=$base->buscador_menor1($lote);
    foreach ($resultado3 as $fila3){
        $fecha1=$fila3["fecha"];
    }

    $resultado2=$base->datos_finales($fecha1);

    $resultado = $base->buscador($lote);
    $resultados4=$base->fisicoquimico($lote);
    if ($resultados4==false){
        $analisis="S/A";
    }else{
        foreach ($resultados4 as $fila4){
            $cumplimiento=$fila4["cumplimiento"];
        }
        
        if ($cumplimiento=="0"){
            $analisis="S/A";
        }else if ($cumplimiento=="1"){
            $analisis="Aprobado";
        }else if ($cumplimiento=="2"){
            $analisis="No aprobado";
        }
    }

    if ($resultado) {
        // Valor de la celda donde empiezan los datos
    
        $indice_resultado2 = 0;
        for ($i = 0; $i < count($resultado); $i++) {
            $fila = $resultado[$i];
            if ($fila['Fecha'] == $fecha) {
                $valFecha = $fila['Fecha'];
                $noLote = $fila["Lote"];
                $analisisFQ = $analisis;
                $categoria = $fila["Categoria"];
                $clase = $fila["Clase_Mezcal"];
                $tanque = $fila["Tanque"];
                $volumen = '0.00';
                $alcVol = '0.00';
            } else {
                if ($indice_resultado2 < count($resultado2)) {
                    // Agregar datos de $fila y $fila2 al $salida
                    $fila2 = $resultado2[$indice_resultado2];
                    $valFecha = $fila['Fecha'];
                    $noLote = $fila["Lote"];
                    $analisisFQ = $analisis;
                    $categoria = $fila["Categoria"];
                    $clase = $fila["Clase_Mezcal"];
                    $tanque = $fila["Tanque"];
                    $volumen = $fila2["final"];
                    $alcVol = $fila2["porcentaje"];
                    // Incrementar el índice de $resultado2
                    $indice_resultado2++;
                }
            }
    
            if ($fila["Movimiento"] == 'Merma') {
                if ($fila["EntradaSalida"] == 'entrada'){
                    $procedencia = $fila["DestinoProcedencia"];
                    $volumenEnt = $fila["Volumen"];
                    $alcVolEnt = $fila["PorcentajeAlcohol"];
                    $volAgua = $fila["VolumenAgua"];
                    $destino = '';
                    $volumenSal = '';
                    $alcVolSal = '';
                    $volumenMerma = $fila["MermasVolumen"];
                    $alcVolMerma = $fila["MermasPorcentaje"];
                    $alcVol55 = $fila["Volumen55"];
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                } else if ($fila["EntradaSalida"] == 'salida'){
                    $procedencia = '';
                    $volumenEnt = '';
                    $alcVolEnt = '';
                    $volAgua = '';
                    $destino = $fila["DestinoProcedencia"];
                    $volumenSal = $fila["Volumen"];
                    $alcVolSal = $fila["PorcentajeAlcohol"];
                    $volumenMerma = $fila["MermasVolumen"];
                    $alcVolMerma = $fila["MermasPorcentaje"];
                    $alcVol55 = $fila["Volumen55"];
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                }
            } else {
                if ($fila["EntradaSalida"] == 'entrada'){
                    $procedencia = $fila["DestinoProcedencia"];
                    $volumenEnt = $fila["Volumen"];
                    $alcVolEnt = $fila["PorcentajeAlcohol"];
                    $volAgua = $fila["VolumenAgua"];
                    $destino = '';
                    $volumenSal = '';
                    $alcVolSal = '';
                    $volumenMerma = '';
                    $alcVolMerma = '';
                    $alcVol55 = '';
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                } else if ($fila["EntradaSalida"] == 'salida'){
                    $procedencia = '';
                    $volumenEnt = '';
                    $alcVolEnt = '';
                    $volAgua = '';
                    $destino = $fila["DestinoProcedencia"];
                    $volumenSal = $fila["Volumen"];
                    $alcVolSal = $fila["PorcentajeAlcohol"];
                    $volumenMerma = '';
                    $alcVolMerma = '';
                    $alcVol55 = '';
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                }
            }
    
            // Poner los datos en las celdas
            $hoja->setCellValue('B' . strval($i + 11), $valFecha)
                ->setCellValue('C' . strval($i + 11), $noLote)
                ->setCellValue('D' . strval($i + 11), $analisisFQ)
                ->setCellValue('E' . strval($i + 11), $categoria)
                ->setCellValue('F' . strval($i + 11), $clase)
                ->setCellValue('G' . strval($i + 11), $tanque)
                ->setCellValue('H' . strval($i + 11), $volumen)
                ->setCellValue('I' . strval($i + 11), $alcVol)
                ->setCellValue('J'.strval($i+11), $procedencia)
                ->setCellValue('K'.strval($i+11), $volumenEnt)
                ->setCellValue('L'.strval($i+11), $alcVolEnt)
                ->setCellValue('M'.strval($i+11), $volAgua)
                ->setCellValue('N'.strval($i+11), $destino)
                ->setCellValue('O'.strval($i+11), $volumenSal)
                ->setCellValue('P'.strval($i+11), $alcVolSal)
                ->setCellValue('Q'.strval($i+11), $volumenMerma)
                ->setCellValue('R'.strval($i+11), $alcVolMerma)
                ->setCellValue('S'.strval($i+11), $alcVol55)
                ->setCellValue('T'.strval($i+11), $volumenFinal)
                ->setCellValue('U' . strval($i + 11), $alcVolFinal);
    
            // Aplicar estilo a las celdas
            for ($col = 'B'; $col <= 'U'; $col++) {
                $estilo = $hoja->getStyle($col . strval($i + 11));
            
                // Ajustar el color de fondo de la celda
                $estilo->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID);
                $estilo->getFill()->getStartColor()->setARGB('FFE7E6E6');
            
                // Establecer los bordes de la celda
                $estilo->getBorders()->getAllBorders()->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
            
                // Ajustar la alineación del contenido de la celda
                $estilo->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
                $estilo->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                $estilo->getAlignment()->setWrapText(true); 
            
                // Ajustar la fuente de la celda
                $estilo->getFont()->setName("Arial")->setSize(11);
            }
        }
    }
    
}
else{
    $lote = $_GET['lote'];   
    $fecha_inicio=$_GET['fecha_inicio'];
    $fecha_fin=$_GET['fecha_fin'];

    $resultado1=$base->buscador_menor($lote);
    foreach ($resultado1 as $fila1){
        $fecha=$fila1["fecha"];
    }

    $resultado3=$base->buscador_menor1($lote);
    foreach ($resultado3 as $fila3){
        $fecha1=$fila3["fecha"];
    }

    $resultado2=$base->datos_finales($fecha1);

    $filtrado = $base->filtrado($lote, $fecha_inicio, $fecha_fin);

    $resultados4=$base->fisicoquimico($lote);
    if ($resultados4==false){
        $analisis="S/A";
    }else{
        foreach ($resultados4 as $fila4){
            $cumplimiento=$fila4["cumplimiento"];
        }
        
        if ($cumplimiento=="0"){
            $analisis="S/A";
        }else if ($cumplimiento=="1"){
            $analisis="Aprobado";
        }else if ($cumplimiento=="2"){
            $analisis="No aprobado";
        }
    }
    

    if ($filtrado){
        //valor de la celda donde empiezan los datos
        $indice_resultado2 = 0;

        for ($i = 0; $i < count($filtrado); $i++) {
            $fila = $filtrado[$i];
            if ($fila['Fecha'] == $fecha){
                $valFecha = $fila['Fecha'];
                $noLote = $fila["Lote"];
                $analisisFQ = $analisis;
                $categoria = $fila["Categoria"];
                $clase = $fila["Clase_Mezcal"];
                $tanque = $fila["Tanque"];
                $volumen = '0.00';
                $alcVol = '0.00';
            } else {
                if ($indice_resultado2 < count($resultado2)) {
                    // Agregar datos de $fila y $fila2 al $salida
                    $fila2 = $resultado2[$indice_resultado2];
                    $valFecha = $fila['Fecha'];
                    $noLote = $fila["Lote"];
                    $analisisFQ = $analisis;
                    $categoria = $fila["Categoria"];
                    $clase = $fila["Clase_Mezcal"];
                    $tanque = $fila["Tanque"];
                    $volumen = $fila2["final"];
                    $alcVol = $fila2["porcentaje"];
                    // Incrementar el índice de $resultado2
                    $indice_resultado2++;
                }
            }
        
            if ($fila["Movimiento"] == 'Merma'){
                if ($fila["EntradaSalida"] == 'entrada'){
                    $procedencia = $fila["DestinoProcedencia"];
                    $volumenEnt = $fila["Volumen"];
                    $alcVolEnt = $fila["PorcentajeAlcohol"];
                    $volAgua = $fila["VolumenAgua"];
                    $destino = '';
                    $volumenSal = '';
                    $alcVolSal = '';
                    $volumenMerma = $fila["MermasVolumen"];
                    $alcVolMerma = $fila["MermasPorcentaje"];
                    $alcVol55 = $fila["Volumen55"];
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                } else if ($fila["EntradaSalida"] == 'salida'){
                    $procedencia = '';
                    $volumenEnt = '';
                    $alcVolEnt = '';
                    $volAgua = '';
                    $destino = $fila["DestinoProcedencia"];
                    $volumenSal = $fila["Volumen"];
                    $alcVolSal = $fila["PorcentajeAlcohol"];
                    $volumenMerma = $fila["MermasVolumen"];
                    $alcVolMerma = $fila["MermasPorcentaje"];
                    $alcVol55 = $fila["Volumen55"];
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                }
            } else {
                if ($fila["EntradaSalida"] == 'entrada'){
                    $procedencia = $fila["DestinoProcedencia"];
                    $volumenEnt = $fila["Volumen"];
                    $alcVolEnt = $fila["PorcentajeAlcohol"];
                    $volAgua = $fila["VolumenAgua"];
                    $destino = '';
                    $volumenSal = '';
                    $alcVolSal = '';
                    $volumenMerma = '';
                    $alcVolMerma = '';
                    $alcVol55 = '';
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                } else if ($fila["EntradaSalida"] == 'salida'){
                    $procedencia = '';
                    $volumenEnt = '';
                    $alcVolEnt = '';
                    $volAgua = '';
                    $destino = $fila["DestinoProcedencia"];
                    $volumenSal = $fila["Volumen"];
                    $alcVolSal = $fila["PorcentajeAlcohol"];
                    $volumenMerma = '';
                    $alcVolMerma = '';
                    $alcVol55 = '';
                    $volumenFinal = $fila["FinalVolumen"];
                    $alcVolFinal = $fila["FinalPorcentaje"];
                }
            }
        
            // Poner los datos en las celdas
            $hoja->setCellValue('B' . strval($i + 11), $valFecha)
                ->setCellValue('C' . strval($i + 11), $noLote)
                ->setCellValue('D' . strval($i + 11), $analisisFQ)
                ->setCellValue('E' . strval($i + 11), $categoria)
                ->setCellValue('F' . strval($i + 11), $clase)
                ->setCellValue('G' . strval($i + 11), $tanque)
                ->setCellValue('H' . strval($i + 11), $volumen)
                ->setCellValue('I' . strval($i + 11), $alcVol)
                ->setCellValue('J'.strval($i+11), $procedencia)
                ->setCellValue('K'.strval($i+11), $volumenEnt)
                ->setCellValue('L'.strval($i+11), $alcVolEnt)
                ->setCellValue('M'.strval($i+11), $volAgua)
                ->setCellValue('N'.strval($i+11), $destino)
                ->setCellValue('O'.strval($i+11), $volumenSal)
                ->setCellValue('P'.strval($i+11), $alcVolSal)
                ->setCellValue('Q'.strval($i+11), $volumenMerma)
                ->setCellValue('R'.strval($i+11), $alcVolMerma)
                ->setCellValue('S'.strval($i+11), $alcVol55)
                ->setCellValue('T'.strval($i+11), $volumenFinal)
                ->setCellValue('U' . strval($i + 11), $alcVolFinal);
    
            // Aplicar estilo a las celdas
            for ($col = 'B'; $col <= 'U'; $col++) {
                $estilo = $hoja->getStyle($col . strval($i + 11));
            
                // Ajustar el color de fondo de la celda
                $estilo->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID);
                $estilo->getFill()->getStartColor()->setARGB('FFE7E6E6');
            
                // Establecer los bordes de la celda
                $estilo->getBorders()->getAllBorders()->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN);
            
                // Ajustar la alineación del contenido de la celda
                $estilo->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
                $estilo->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);
                $estilo->getAlignment()->setWrapText(true); 
            
                // Ajustar la fuente de la celda
                $estilo->getFont()->setName("Arial")->setSize(11);
            }
        }
            
    }
}

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
header('Content-Disposition: attachment;filename="Movimientos de Mezcal Lote '.$lote. '.Xlsx"');
header('Cache-Control: max-age=0');

$writer = PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
$writer->save('php://output');
?>