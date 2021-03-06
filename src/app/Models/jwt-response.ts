export interface JwtResponse {
  dataUser: {
    id: number,
    name: String,
    email: String,
    accesToken: String,
    expiressIn: String
  }
}
