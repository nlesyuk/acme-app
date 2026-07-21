'use client';

import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import { createInvoice, State } from '@/app/lib/actions';
import InvoiceForm from '@/app/ui/invoices/invoice-form';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <InvoiceForm
      customers={customers}
      action={formAction}
      state={state}
      submitLabel="Create Invoice"
    />
  );
}
