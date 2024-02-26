"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesByState = exports.getStatesByCountry = exports.getCountries = void 0;
const fs_1 = __importDefault(require("fs"));
const data = JSON.parse(fs_1.default.readFileSync('./data.json', 'utf-8'));
function getCountries() {
    return data.map(countryData => countryData.country);
}
exports.getCountries = getCountries;
function getStatesByCountry(countryName) {
    const countryData = data.find(countryData => countryData.country === countryName);
    return countryData ? countryData.states.map(stateData => stateData.state) : [];
}
exports.getStatesByCountry = getStatesByCountry;
function getCitiesByState(stateName, countryName) {
    const countryData = data.find(countryData => countryData.country === countryName);
    if (countryData) {
        const stateData = countryData.states.find(stateData => stateData.state === stateName);
        return stateData ? stateData.cities : [];
    }
    return [];
}
exports.getCitiesByState = getCitiesByState;
