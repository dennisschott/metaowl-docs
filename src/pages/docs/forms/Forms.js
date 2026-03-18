import { Component, useState } from '@odoo/owl'
import { Meta, useForm, validators } from 'metaowl'

export default class Forms extends Component {
  static template = 'Forms'
  static components = {}

  setup() {
    Meta.title('Form Handling - MetaOWL')
    Meta.description('Build validated forms with useForm() in MetaOWL.')

    // Initialize form with all possible features
    this.form = useForm({
      name: {
        default: '',
        validation: [
          validators.required('Name is required'),
          validators.minLength(2, 'Name must be at least 2 characters'),
          validators.maxLength(50, 'Name must be at most 50 characters'),
        ],
      },
      email: {
        default: '',
        validation: [
          validators.required('Email is required'),
          validators.email('Please enter a valid email address'),
        ],
      },
    })

    // Reactive state bindings (must be before methods that reference them)
    this.fields = useState(this.form.fields)
    this.errors = useState(this.form.errors)
    this.touched = useState(this.form.touched)
    this.dirty = useState(this.form.dirty)
    this.formState = useState({ isSubmitting: false })

    // Create submit handler
    const innerSubmit = this.form.handleSubmit(async (values) => {
      // Log form data to console
      console.log('Form submitted with values:', values)
      console.log('Form is valid:', this.form.isValid)
      console.log('Form is dirty:', this.form.isDirty)
      console.log('Form errors:', this.form.errors)

      // Simulate async submission
      await new Promise((resolve) => setTimeout(resolve, 500))

      alert(`Form submitted!\nName: ${values.name}\nEmail: ${values.email}`)
    })

    this.submitHandler = async () => {
      this.formState.isSubmitting = true
      try {
        await innerSubmit()
      } finally {
        this.formState.isSubmitting = false
      }
    }

    // Expose helper methods for the template
    this.showValues = () => {
      console.log('Current form values:', this.form.fields)
      console.log('Current form errors:', this.form.errors)
      console.log('Touched fields:', this.form.touched)
      console.log('Is valid:', this.form.isValid)
      console.log('Is dirty:', this.form.isDirty)
      console.log('Is submitting:', this.form.isSubmitting)
    }

    this.handleReset = () => {
      this.form.reset()
      console.log('Form reset to initial values')
    }

    this.validateForm = async () => {
      const isValid = await this.form.validate()
      console.log('Manual validation result:', isValid)
    }

    this.getFieldsJson = () => {
      const { name, email } = this.fields
      return JSON.stringify({ name, email }, null, 2)
    }

    this.getErrorsJson = () => {
      const { name, email } = this.errors
      return JSON.stringify(
        { name: name ?? null, email: email ?? null },
        null,
        2,
      )
    }
  }
}
