# HRNet Modal

## Install

```bash
npm i modal-package-hrnet
```

## Usage

```jsx
import Modal from 'modal-package-hrnet';

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
