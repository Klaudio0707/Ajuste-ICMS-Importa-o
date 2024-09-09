const form = document.querySelector("form");
const total_Dmi = document.querySelector(".outBase");
const icms_SUP = document.querySelector(".ICMS");
const total_SUP = document.querySelector(".Total_DMI");
const dif_ICMS = document.querySelector(".dif_ICMS");
const dif_Total = document.querySelector(".dif_Total");

// DMI
let sub_Total = 0;
let icms_Dmi = 0;
// SUP3760
let  sup_ICMS = 0;
let sup_DMI_total = 0;
// SAIDA PARA O CAMPO SUP3760
let value_Sup_ICMS  = "";
let value_Sup_Total = "";



form.addEventListener("submit", (e) => {
    e.preventDefault();
    sub_Total = Number(inSubTotalDMI.value.replace(/\./g, '').replace(',', '.'));
    icms_Dmi = Number(inICMS.value.replace(/\./g, '').replace(',', '.'));

    if (isNaN(sub_Total) || isNaN(icms_Dmi) || sub_Total <= 0 || icms_Dmi <= 0) {
        alert("Por favor, insira valores numéricos, positivos para subtotal e ICMS.");
        form.reset();
        inSubTotalDMI.focus();
        return;      
    }
    let total = sub_Total + icms_Dmi;
    const formatTotal = total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    total_Dmi.innerText = `R$: ${formatTotal}`;
    icms_SUP.innerText = `R$: ${icms_Dmi}`;
    total_SUP.innerText = `R$: ${sub_Total}`;
    form.reset();
});

function ICMS() {
sup_ICMS = Number(e.supICMS.value.replace(/\./g, '').replace(',', '.'));
sup_DMI_total = Number(e.supTotal.value.replace(/\./g, '').replace(",", "."));
if (isNaN(sup_ICMS) || sup_ICMS <= 0 || isNaN(sup_DMI_total ) || sup_DMI_total  <= 0) {
alert("informe um valor valido!!");
}
value_Sup_ICMS = icms_Dmi - supICMSValue;
value_Sup_Total = sub_Total - sup_DMI_total;

dif_ICMS.innerText = sup_ICMS.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
dif_Total.innerText = sup_DMI_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

};
