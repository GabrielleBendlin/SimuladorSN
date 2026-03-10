
const anexoI = [
    {faixa: 'primeiraFaixa', RBT12Min: 0, RBT12Max: 180000.00, aliquota: 0.040, valorDeduzir: 0},
    {faixa: 'segundaFaixa', RBT12Min: 180000.01, RBT12Max: 360000.00, aliquota: 0.073, valorDeduzir: 5940.00},
    {faixa: 'terceiraFaixa', RBT12Min: 360000.01, RBT12Max: 720000.00, aliquota: 0.95, valorDeduzir: 13860.00},
    {faixa: 'quartaFaixa', RBT12Min: 720000.01, RBT12Max: 1800000.00, aliquota: 0.107, valorDeduzir: 22500.00},
    {faixa: 'quintaFaixa', RBT12Min: 1800000.01, RBT12Max: 3600000.00, aliquota: 0.143, valorDeduzir: 87300.00},
    {faixa: 'sextaFaixa', RBT12Min: 3600000.01, RBT12Max: 4800000.00, aliquota: 0.19, valorDeduzir: 378000.00},
]
const anexoII = [
    {faixa: 'primeiraFaixa', RBT12Min: 0, RBT12Max: 180000.00, aliquota: 0.045, valorDeduzir: 0},
    {faixa: 'segundaFaixa', RBT12Min: 180000.01, RBT12Max: 360000.00, aliquota: 0.078, valorDeduzir: 5940.00},
    {faixa: 'terceiraFaixa', RBT12Min: 360000.01, RBT12Max: 720000.00, aliquota: 0.10, valorDeduzir: 13860.00},
    {faixa: 'quartaFaixa', RBT12Min: 720000.01, RBT12Max: 1800000.00, aliquota: 0.112, valorDeduzir: 22500.00},
    {faixa: 'quintaFaixa', RBT12Min: 1800000.01, RBT12Max: 3600000.00, aliquota: 0.147, valorDeduzir: 85500.00},
    {faixa: 'sextaFaixa', RBT12Min: 3600000.01, RBT12Max: 4800000.00, aliquota: 0.30, valorDeduzir: 720000.00},
]
const anexoIII = [
    {faixa: 'primeiraFaixa', RBT12Min: 0, RBT12Max: 180000.00, aliquota: 0.06, valorDeduzir: 0},
    {faixa: 'segundaFaixa', RBT12Min: 180000.01, RBT12Max: 360000.00, aliquota: 0.112, valorDeduzir: 9360.00},
    {faixa: 'terceiraFaixa', RBT12Min: 360000.01, RBT12Max: 720000.00, aliquota: 0.135, valorDeduzir: 17640.00},
    {faixa: 'quartaFaixa', RBT12Min: 720000.01, RBT12Max: 1800000.00, aliquota: 0.16, valorDeduzir: 35640.00},
    {faixa: 'quintaFaixa', RBT12Min: 1800000.01, RBT12Max: 3600000.00, aliquota: 0.21, valorDeduzir: 125640.00},
    {faixa: 'sextaFaixa', RBT12Min: 3600000.01, RBT12Max: 4800000.00, aliquota: 0.33, valorDeduzir: 648000.00},
]
const anexoIV = [
    {faixa: 'primeiraFaixa', RBT12Min: 0, RBT12Max: 180000.00, aliquota: 0.045, valorDeduzir: 0},
    {faixa: 'segundaFaixa', RBT12Min: 180000.01, RBT12Max: 360000.00, aliquota: 0.09, valorDeduzir: 8100.00},
    {faixa: 'terceiraFaixa', RBT12Min: 360000.01, RBT12Max: 720000.00, aliquota: 0.102, valorDeduzir: 12420.00},
    {faixa: 'quartaFaixa', RBT12Min: 720000.01, RBT12Max: 1800000.00, aliquota: 0.14, valorDeduzir: 39780.00},
    {faixa: 'quintaFaixa', RBT12Min: 1800000.01, RBT12Max: 3600000.00, aliquota: 0.22, valorDeduzir: 183780.00},
    {faixa: 'sextaFaixa', RBT12Min: 3600000.01, RBT12Max: 4800000.00, aliquota: 0.33, valorDeduzir: 828000.00},
]
const anexoV = [
    {faixa: 'primeiraFaixa', RBT12Min: 0, RBT12Max: 180000.00, aliquota: 0.155, valorDeduzir: 0},
    {faixa: 'segundaFaixa', RBT12Min: 180000.01, RBT12Max: 360000.00, aliquota: 0.18, valorDeduzir: 4500.00},
    {faixa: 'terceiraFaixa', RBT12Min: 360000.01, RBT12Max: 720000.00, aliquota: 0.195, valorDeduzir: 9900.00},
    {faixa: 'quartaFaixa', RBT12Min: 720000.01, RBT12Max: 1800000.00, aliquota: 0.205, valorDeduzir: 17100.00},
    {faixa: 'quintaFaixa', RBT12Min: 1800000.01, RBT12Max: 3600000.00, aliquota: 0.23, valorDeduzir: 62100.00},
    {faixa: 'sextaFaixa', RBT12Min: 3600000.01, RBT12Max: 4800000.00, aliquota: 0.3050, valorDeduzir: 540000.00},
]

function valorFaixa(tipoAnexo, RBT12) {
    let faixa = null

    if (tipoAnexo == "Anexo I") {
        faixa = anexoI.find(function(faixaAnexo) {
            return RBT12 >= faixaAnexo.RBT12Min && RBT12 <= faixaAnexo.RBT12Max
        })
    } else if (tipoAnexo == "Anexo II") {
        faixa = anexoII.find(function(faixaAnexo) {
            return RBT12 >= faixaAnexo.RBT12Min && RBT12 <= faixaAnexo.RBT12Max
        })
    } else if (tipoAnexo == "Anexo III") {
        faixa = anexoIII.find(function(faixaAnexo) {
            return RBT12 >= faixaAnexo.RBT12Min && RBT12 <= faixaAnexo.RBT12Max
        })
    } else if (tipoAnexo == "Anexo IV") {
        faixa = anexoIV.find(function(faixaAnexo) {
            return RBT12 >= faixaAnexo.RBT12Min && RBT12 <= faixaAnexo.RBT12Max
        })
    } else if (tipoAnexo == "Anexo V") {
        faixa = anexoV.find(function(faixaAnexo) {
            return RBT12 >= faixaAnexo.RBT12Min && RBT12 <= faixaAnexo.RBT12Max
        })
    }

    return faixa
}

function calcularSN() {
    const tipoAnexo = document.getElementById("tipoAnexo").value
    const RBT12 = parseFloat(document.getElementById("RBT12").value)
    const faturamentoMes = document.getElementById("faturamentoMes").value

    let faixa = valorFaixa(tipoAnexo, RBT12)
    debugger
    console.log(faixa)
    
    let valorProvisorio = (RBT12 * faixa.aliquota) - faixa.valorDeduzir
    let aliquotaEfetiva = valorProvisorio / RBT12
    let valorDAS = faturamentoMes * aliquotaEfetiva

    document.getElementById("aliquotaNominal").value = faixa.aliquota
    document.getElementById("aliquotaEfetiva").value = aliquotaEfetiva
    document.getElementById("valorDAS").value = valorDAS
}