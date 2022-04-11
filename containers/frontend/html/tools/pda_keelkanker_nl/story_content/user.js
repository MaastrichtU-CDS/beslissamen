function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TAqbIgSUWw":
        Script1();
        break;
  }
}

function Script1()
{
  window.frames[0].frameElement.contentWindow.createPDF();
}

