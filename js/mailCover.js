// Verhindern von E-mail scraping

const mailCover = () => {

        // 1. Aufteilung der Mails
        var fina = "fina.asshauer";
        var benn = "benno.bongaertz";
        var place = "@gmail.com";
    
        // 2. Abkürzung des Codes
        var linkf = document.getElementById("mlink-f");
        var linkb = document.getElementById("mlink-b");
    
        // 3. Zusammensetzen der Links
        linkf.href = `mailto:${fina}@${place}`;
        linkb.href = `mailto:${benn}@${place}`;
    
        // 4. Einfügen im HTML
        linkf.innerHTML = fina + place
        linkb.innerHTML = benn + place
}