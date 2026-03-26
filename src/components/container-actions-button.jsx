import { AddButton } from './add-button';
import { DeleteButton } from './delete-button';
import { EditButton } from './edit-button';

export const ContainerActionsButton = () => (
  <div className="container-actions-button">
    <AddButton onClick={() => console.log('Add button clicked')} />
    <EditButton onClick={() => console.log('Edit button clicked')} />
    <DeleteButton onClick={() => console.log('Delete button clicked')} />
  </div>
);
