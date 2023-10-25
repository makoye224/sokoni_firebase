import { useState } from 'react'
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [unitPrice, setUnitPrice] = useState(null)
  const [inventory, setInventory] = useState(null)
  const [photos, setPhotos] = useState([]);
 
  const handlePhotoChange = (e) => {
    // Get an array of selected files
    const selectedPhotos = Array.from(e.target.files);
  
    // Update the state with the selected photos
    setPhotos(selectedPhotos);
  };

  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className='form container'>
    <div className='d-flex justify-content-center align-items-center vh-10'>
    <Card style={{ width: '30rem' }}>
    <Card.Body>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Title</label>
          <input
            type='text'
            name='name'
            id='name'
            value={title}
            maxLength={20}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='form-control'
          />
          <div className='invalid-feedback'>
            Please provide a valid name.
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            maxLength={50}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='form-control'
          />
          <div className='invalid-feedback'>
            Please provide a valid description.
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Unit Price</label>
          <input
            type='number'
            name='price'
            id='price'
            value={unitPrice}
            min={0}
            onChange={(e) => setUnitPrice(e.target.value)}
            required
            className='form-control'
          />
          <div className='invalid-feedback'>
            Please provide a valid price.
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='inventory'>Inventory</label>
          <input
            type='number'
            name='inventory'
            id='inventory'
            value={inventory}
            min={1}
            onChange={(e) => setInventory(e.target.value)}
            required
            className='form-control'
          />
          <div className='invalid-feedback'>
            Please provide a valid inventory value.
          </div>
        </div>
        <div className='form-group'>
  <label htmlFor='photo'>Photos</label>
  <input
    type='file'
    name='photo'
    id='photo'
    onChange={handlePhotoChange}
    className='form-control'
    required
    multiple  // Add the 'multiple' attribute to allow multiple file selection
  />
  <div className='invalid-feedback'>
    Please provide valid photos.
  </div>
</div>

        <br/>
        <div className='form-group'>
          <button className='btn btn-block btn-primary' type='submit' style={{borderRadius: '0.8rem'}}>Add Product
          </button>
          
          {unitPrice !== '' && unitPrice < 0 && (
            <div className="invalid-feedback d-block">
              Price cannot be negative.
            </div>
          )}
        </div>
      </form>
      </Card.Body>
      </Card>
      </div>
    </section>
  )
}

export default AddProduct;