import {achievements} from './data.js';
export function addXP(state,amount){state.xp=Math.max(0,state.xp+amount);}
export function levelFor(xp){return Math.floor(Math.sqrt(Math.max(0,xp)/100))+1;}
export function awardAchievements(state){const newly=[];for(const a of achievements){if(!state.achievements.includes(a.id)&&a.check(state)){state.achievements.push(a.id);newly.push(a);}}return newly;}
export function markStudyDay(state){const today=new Date().toISOString().slice(0,10);if(state.lastStudyDate===today)return;const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);state.streak=state.lastStudyDate===yesterday?state.streak+1:1;state.lastStudyDate=today;}
