import React from 'react'
import { Alert, Button } from 'react-bootstrap'

export default function NotFound() {
  return (
    <>
    <Alert variant='danger' className='text-center'>
        <h1>Pagina non trovata!!!</h1>
    </Alert>
    <Button variant="dark" className="mt-3" onClick={() => window.history.back()}>
    Back to Books
    </Button>
    </>
  )
}