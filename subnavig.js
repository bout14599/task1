var browser_type=navigator.appName;
var vertical_location = 'r';
var main_cat='cat_25::cat_31::cat_12::cat_36::cat_37::cat_33::cat_34::cat_6::cat_22::cat_38';
var sub_cat='cat_31:cat_3:Comunicaci&#243;n:e:1,cat_31:cat_32:Canal en YouTube:e:2,cat_31:cat_13:&#191;Qui&#233;nes somos?:y:3,cat_12:cat_23:Omni Via:e:1,cat_12:cat_35:Locuci&#243;n:e:2,cat_33:cat_4:Las 1001 palabras:y:1,cat_33:cat_27:VSI&#58; Club de Oratoria:y:2';
var sub_cat_ext='cat_3::http://info.garamex.com::n,cat_32::http://www.youtube.com/user/recursosgaramex?feature=results_main::n,cat_13::http://::n,cat_23::http://www.cursos.garamex.com/omniviacurso_10.html::n,cat_35::http://www.cursos.garamex.com/locfuerza_21.html::n,cat_4::http://::n,cat_27::http://::n';
var sub_navig_file_name="25:inicio_25.html::31:page_31.html::3:page_3.html::32:canal_recursosgaramex_en_youtube_32.html::13:contact_13.html::12:page_12.html::23:omnivia_23.html::35:locucion_35.html::36:hermeneutica_36.html::37:ov_37.html::33:oratoria_33.html::4:oratoria_4.html::27:vsi_27.html::34:canto_34.html::6:cursos_danza_6.html::22:cuerdas_y_viento_en_garamex_22.html::38:avisoconfidencialidad_38.html::";
var open_scroll_img ='img/base/ba3.jpg';
var open_static_img ='img/base/ba2.jpg';
var l_int_width = 155; 
var l_int_height = 18;  
var title_size =2;
var title_style ="Verdana";
var title_align="right"; 
var l_str_ver_align = "middle" ;
var default_title_color = "#ffffff" ; 
var scroll_title_color = "#000000";  
var common_height ; 
var common_width; 
var common_top;
var common_left;
var common_inc; 
function getScreenFix(l)
{
var l_width_pixel =eval(l);
if(screen.width < 1024)
l_width_pixel = eval(l-(l_int_width+Math.round(l_int_width/2.3)));
return l_width_pixel; 
}
var l_img_scroll_list = new Array(open_scroll_img,open_scroll_img,open_scroll_img);
var l_img_static_list = new Array(open_static_img,open_static_img,open_static_img);
var l_img_width_list = new Array('100','120','180');
var l_img_height = 20;