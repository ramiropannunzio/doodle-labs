let times = 0;

$('#formbtn').on('click', function() {
    const name = $('#name').val().trim();
    const lastname = $('#lastname').val().trim();
    const company = $('#company').val().trim();
    const email = $('#email').val().trim();
    const product = $('#product_name').val().trim();

    if (!name || !lastname || !company || !email) {
        $("#wrong").addClass("active");
        setTimeout(function(){$("#wrong").removeClass("active")} , 3000)
        return;
    }


    let existingData = JSON.parse(localStorage.getItem('formDataListV2')) || [];


    existingData.push({
        name: name,
        lastname: lastname,
        company: company,
        email: email,
        product:product,
        downloaded:null
    });

    // Guardar actualizado
    localStorage.setItem('formDataListV2', JSON.stringify(existingData));

    $("#ok").addClass("active");
    setTimeout(function(){$("#ok").removeClass("active")} , 3000)
    // Limpiar formulario
    $('#name').val('');
    $('#lastname').val('');
    $('#company').val('');
    $('#email').val('');
});

function downloadCSV(){
    let data = JSON.parse(localStorage.getItem('formDataListV2')) || [];

    if (data.length === 0) {
        window.alert('No data to download');
        return;
    }

    let csv = 'Name,Last Name,Company,Email,Product,Downloaded\n';
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }

    const formattedDate = now.toLocaleString('en-US', options);

    data.forEach(function(item) {
        csv += `"${item.name}","${item.lastname}","${item.company}","${item.email}","${item.product}"`;
        if(item.downloaded === null){
            item.downloaded = formattedDate
        }
        csv += `,"${item.downloaded}"\n`;
    });
    localStorage.setItem('formDataListV2', JSON.stringify(data));
    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = $('#product_name').val() + ' ' + formattedDate + '.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


}

let secretClickCount = 0;

$('#secretbtn').on('click', function() {
    secretClickCount++;
    console.log(secretClickCount);

    if (secretClickCount >= 5) {
        downloadCSV();
        secretClickCount = 0;
    }
});