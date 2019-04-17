function doPost(e) {
  
  var p = e.parameter.text;
  var p_sp = p.split(" ");
  var source_text = "";
  
  var source_lang = p_sp[0];
  
  for(var i =1; i < p_sp.length; i++) {
    source_text = source_text + p_sp[i] + " ";
  }
  
  if(source_lang == "ja"){
    var translatedText = LanguageApp.translate(source_text, "ja", "en");
  } else if(source_lang == "en"){
    var translatedText = LanguageApp.translate(source_text, "en", "ja");
  }else{
    var translatedText = "not supported " + source_lang;
  }
  
  return ContentService.createTextOutput(source_text + ": " + translatedText);
  
}
