export interface Activity {
    id: string
    video_url: string
    name: string
    description: string
    duration: string
    created_by: string
    image: string
    thumbnail: string
    cropped: string
    file_name_original: string
    popularity: string
    category_id: string
    category: string
    keywords: string
  }
  export interface Customer {
    client: Client
    httpCode: number
    httpMessage: string
    userFriendlyError: string
    moreInformation: string
    internal_id: string
  }
  
  export interface Client {
    rut: string
    names: string
    birthday: string
    paternalLastName: string
    maternalLastName: string
    sex: string
    celphone: string
    mail: string
    codCountry: string
    descCountry: string
    codState: string
    descState: string
    codCity: string
    descCity: string
    codTown: string
    descTown: string
    address: string
    lineaNegocioOrigen: string
  }

  export interface LoginCredential {
    email: string;
    password: string;
  }