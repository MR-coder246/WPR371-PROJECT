
function validate() {
        const fullName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const country = document.getElementById("Country").value;
        const form = `Full Name: ${fullName}\nEmail: ${email}\nCountry: ${country}`;
        alert(form);
    }
function calculateFileSize() {
        const fileSizeInput = document.getElementById("fileSize");
        const unitSelect = document.getElementById("unit");
        const fileSize = parseFloat(fileSizeInput.value);
        const selectedUnit = unitSelect.value;
    
        if (!isNaN(fileSize)) {
            let result;
            switch (selectedUnit) {
                case "bytes":
                    result = fileSize + " bytes";
                    break;
                case "KB":
                    result = (fileSize / 1024).toFixed(2) + " KB";
                    break;
                case "MB":
                    result = (fileSize / (1024 * 1024)).toFixed(2) + " MB";
                    break;
                case "GB":
                    result = (fileSize / (1024 * 1024 * 1024)).toFixed(2) + " GB";
                    break;
                default:
                    result = "Invalid unit selection";
            }
    
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Result: " + result;
        } else {
            alert("Please enter a valid file size.");
        }
    }