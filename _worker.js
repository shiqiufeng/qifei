// Extract country/region information from CSV headers
const countryRegion = csvHeaders.some(header => header.includes('Country')) ? csvHeaders.find(header => header.includes('Country')) : '';

// Append to proxy remark
proxyRemark = `${proxyRemark} CF优选 (${countryRegion})`;
