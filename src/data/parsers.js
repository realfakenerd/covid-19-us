import format from './format.js';
import moment from 'moment'

function usStats(data) {
    const [usStatRaw] = data;
    return {
        cases: format.number(usStatRaw.positive),
        deaths: format.number(usStatRaw.death),
        recovered: format.number(usStatRaw.recovered),
        ventilation: format.number(usStatRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatRaw.hospitalized),
        icu: format.number(usStatRaw.inIcuCurrently),
        tested: format.number(usStatRaw.totalTestResults),
        updated: moment(usStatRaw.lastModified).format('LLLl')
    }
}

export default {
    usStats
}