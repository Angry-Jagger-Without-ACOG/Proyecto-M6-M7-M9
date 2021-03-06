import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Profesor } from '../Models/Profesor.model';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Ranking } from '../Models/Ranking.model';

@Injectable({
  providedIn: 'root'
})

export class ProfeToolsService {

  cookies: any;
  datos: Object;
  vsession: String;
  CrearRanking: boolean;
  codigo: String;
  nombre: String;


  constructor(private http: HttpClient) { }



  loginUsuario(login) {
    return this.http.post(`${environment.serverUrl}LoginAlumno.php`, JSON.stringify(login));
  }

  loginProfe(login) {
    return this.http.post(`${environment.serverUrl}LoginProfe.php`, JSON.stringify(login));
  }

  RegistrarProfesor(profesor) {
    console.log(profesor);
    return this.http.post(`${environment.serverUrl}RegistroProfesor.php`, JSON.stringify(profesor));
  }

  listarusuarios() {
    return this.http.get(`${environment.serverUrl}SelectPrueba.php`);
  }

  RegistroAlumno(alumno) {
    return this.http.post(`${environment.serverUrl}RegistroAlumno.php`, JSON.stringify(alumno));
  }

  GetProfesor(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectProfesor.php`, JSON.stringify(nombre_Usuario));
  }

  GetAlumno(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectAlumno.php`, JSON.stringify(nombre_Usuario));
  }

  CambiosPerfilProfe(update) {
    return this.http.put(`${environment.serverUrl}UpdateProfesor.php`, JSON.stringify(update));
  }

  CambiosPerfilAlumno(update) {
    return this.http.put(`${environment.serverUrl}UpdateAlumno.php`, JSON.stringify(update));
  }

  cambiarContraseñaAlumno(profesor) {

    return this.http.put(`${environment.serverUrl}UpdatePasswordAlumno.php`, JSON.stringify(profesor));

  }

  cambiarContraseñaProfesor(profesor) {
    return this.http.put(`${environment.serverUrl}updatePasswordProfesor.php`, JSON.stringify(profesor));

  }

  crearRanking(ranking)
  {
    console.log(ranking);
    return this.http.put(`${environment.serverUrl}CrearRanking.php`, JSON.stringify(ranking));
  }

  crearTablaTarea(ranking)
  {
    console.log(ranking)
    return this.http.put(`${environment.serverUrl}CrearTablaTareas.php`, JSON.stringify(ranking))
  }
  DeleteRanking(codigoRanking){
    return this.http.put(`${environment.serverUrl}DeleteRanking.php`, JSON.stringify(codigoRanking))
  }
  DropTableRanking(NombreTabla){
    return this.http.put(`${environment.serverUrl}DropTableRanking.php`, JSON.stringify(NombreTabla))
  }

  selectRankings(nombre_Usuario){
    return this.http.post(`${environment.serverUrl}SelectRanking.php`,JSON.stringify(nombre_Usuario));
  }

  getTotalRankings(nombre_Usuario){
    return this.http.post(`${environment.serverUrl}CountRankings.php`,JSON.stringify(nombre_Usuario));
  }

  selectTareas(ranking){
    return this.http.post(`${environment.serverUrl}SelectTotalTareas.php`,JSON.stringify(ranking));
  }

  GenerarCodigo(ranking){
    return this.http.post(`${environment.serverUrl}GenerarCodigo.php`,JSON.stringify(ranking));
  }

  enviarNombreTarea(SelectTareas){

    return this.http.post(`${environment.serverUrl}SelectTarea.php`,JSON.stringify(SelectTareas));
  }

  actualizarPuntuacionNueva(PuntuacionNueva){

    return this.http.put(`${environment.serverUrl}UpdatePuntuacionNueva.php`,JSON.stringify(PuntuacionNueva));
  }

  selectRankingOrdenPuntuacion(Ranking){
    return this.http.post(`${environment.serverUrl}SelectRankingPuntuacion.php`,JSON.stringify(Ranking));
  }

  comprobarRanking(codigoRanking){
    return this.http.post(`${environment.serverUrl}ComprobarRanking.php`,JSON.stringify(codigoRanking));
  }

  unirseRanking(datosRanking){
    return this.http.put(`${environment.serverUrl}UnirseRanking.php`,JSON.stringify(datosRanking));
  }

  selectTodosRankings(){
    return this.http.get(`${environment.serverUrl}GetRanking.php`);
  }

  selectRankingsAlumno(nombre_Usuario){
    return this.http.post(`${environment.serverUrl}SelectRankingAlumno.php`,JSON.stringify(nombre_Usuario));
  }

  selectComprobarTablaTarea(datosRanking){
    return this.http.post(`${environment.serverUrl}ComprobarTablaTarea.php`,JSON.stringify(datosRanking));
  }

  insertTablaTarea(datosRanking){
    return this.http.post(`${environment.serverUrl}InsertTablaTarea.php`,JSON.stringify(datosRanking));
  }

  selectRankingPorcodigo(codigoRanking){
    return this.http.post(`${environment.serverUrl}SelectRankingAlumnoCodigo.php`,JSON.stringify(codigoRanking));
  }

  getRanking(){
    return this.nombre;
  }

  getCodigo(){
    return this.codigo;

  }
  setCodigo(codigo,nombre){
    this.codigo = codigo;
    this.nombre = nombre;
  }

  getDatos(): any {
    return this.datos;
  }

  setDatos(usuario): any {
    this.datos = usuario;
  }
  borrarDatos(): any {
    this.datos = "";
  }

  setSession(session): any {
    this.vsession = session;
  }
  getSession() {
    return this.vsession;
  }


}

