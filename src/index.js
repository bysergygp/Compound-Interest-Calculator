
const chartCompoundInterest= document.getElementById('chartCompoundInterest');
const formCompoundInterest= document.getElementById('compoundInterestCalculation');

const actualYear = new Date().getFullYear();

let chart = new Chart(chartCompoundInterest, {});

formCompoundInterest.addEventListener("submit", (e) => {

    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formCompoundInterest));

    let initialBalance = formData.initialBalance;
    let mensualContribution = formData.mensualContribution;
    let performance = formData.performance;
    let period = formData.period;

    let dataCompoundInterestCalculation = compoundInterestCalculation(initialBalance, mensualContribution, performance, period);
    
    chart.destroy()

    chart = new Chart(chartCompoundInterest, {
        type: 'bar',
        data: {
            labels: dataCompoundInterestCalculation['labels'],
            datasets: [
                {
                    label: 'Balance Inicial',
                    data: dataCompoundInterestCalculation['initialBalance']
                },
                {
                    label: 'Aportación',
                    data: dataCompoundInterestCalculation['contribution']
                },
                {
                    label: 'Interes Generado',
                    data:  dataCompoundInterestCalculation['interestGenerated']
                }
            ]
        },
        options: {
                responsive: true,
                scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        } 
    });

})

function compoundInterestCalculation(initialBalance, mensualContribution, performance, period) {
    data = {
        'initialBalance': [],
        'contribution': [],
        'interestGenerated': [],
        'labels': []
    }
    
    initialBalance = parseInt(initialBalance)
    mensualContribution = parseInt(mensualContribution)
    performance = parseInt(performance)
    period = parseInt(period)

    console.log()

    let yieldPerformance = performance/100

    let totalContribution = initialBalance
    let compoundInterest = initialBalance

    for (let countYear = 0; countYear < period; countYear++) {

        let totalPeriodContribution = 0
        let compoundPeriodInterest = 0

        compoundPeriodInterest += compoundInterest * (1+yieldPerformance/12) ** 12


        for (let countMonth = 1; countMonth <= 12; countMonth++){
            totalPeriodContribution += mensualContribution
            compoundPeriodInterest += mensualContribution * (1 + yieldPerformance/12) ** countMonth
            
        }

        
        totalContribution += totalPeriodContribution
        compoundInterest = compoundPeriodInterest

        data['labels'].push(actualYear + countYear)
        data['initialBalance'].push(initialBalance)
        data['contribution'].push(totalContribution)
        data['interestGenerated'].push(compoundInterest - totalContribution)
    }

    console.log(data)

    return data                               
}



// for (let index = 1; index <= periodo; index++) {
//     interesCompuesto += aportacionMensual * (1 + rendimientoPorcentaje/periodo) ** index 
//     totalAportado += aportacionMensual
// }

// let interesCompuesto2 = interesCompuesto * (1+0.07/12)**12
// periodo = 12
// let totalAportado2 = totalAportado

// for (let index = 1; index <= periodo; index++) {
//     interesCompuesto2 += aportacionMensual * (1 + rendimientoPorcentaje/periodo) ** index 
//     totalAportado2 += aportacionMensual
// }

// let interesCompuesto3 = 0
// interesCompuesto3 += interesCompuesto2 * (1+0.07/12)**12
// periodo = 12
// let totalAportado3 = totalAportado2

// for (let index = 1; index <= periodo; index++) {
//     interesCompuesto3 += aportacionMensual * (1 + rendimientoPorcentaje/periodo) ** index 
//     totalAportado3 += aportacionMensual
// }

// const labels = [actualYear, actualYear+1, actualYear+2];

