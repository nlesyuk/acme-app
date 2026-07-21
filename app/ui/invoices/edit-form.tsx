'use client';

import { CustomerField, InvoiceForm as InvoiceFormType } from '@/app/lib/definitions';
import { State, updateInvoice } from '@/app/lib/actions';
import { useActionState } from 'react';
import InvoiceForm from '@/app/ui/invoices/invoice-form';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceFormType;
  customers: CustomerField[];
}) {
  const updateInvoiceById = updateInvoice.bind(null, invoice.id);
  const initialState: State = { message: null, errors: {} };
  const [state, editFormAction] = useActionState(updateInvoiceById, initialState);

  return (
    <InvoiceForm
      customers={customers}
      action={editFormAction}
      state={state}
      submitLabel="Edit Invoice"
      defaultValues={{
        customerId: invoice.customer_id,
        amount: invoice.amount,
        status: invoice.status,
      }}
    />
  );
}
