export type Patient = {
    id: string
    name: string
    caretaker: string
    date: Date
    email: string
    textarea: string
}

export type patientDraf = Omit<Patient, 'id'>;