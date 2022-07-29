# HRNet Modal

## Install

```bash
npm i modal-component-hrnet
```

## Usage

```jsx
import Modal from 'modal-component-hrnet';

function Example() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Modal
      setOpen={setModalIsOpen}
      message='Employee created'
      buttonText='Close'
    />
  )
}
```
