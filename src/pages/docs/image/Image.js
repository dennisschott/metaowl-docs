import { Component } from '@odoo/owl'
import { useState } from '@odoo/owl'
import { Meta, Image as ImageAPI } from 'metaowl'

export default class ImageDoc extends Component {
  static template = 'Image'
  static components = {}

  setup() {
    Meta.title('Image - MetaOWL')
    Meta.description(
      'Image optimization utilities for responsive images, lazy loading, and placeholders.',
    )
    this.state = useState({
      dimensions: null,
      aspectRatio: null,
      loading: false,
      error: null,
    })
    this.loadImageDimensions()
  }

  async loadImageDimensions() {
    this.state.loading = true
    this.state.error = null
    try {
      const result = await ImageAPI.getImageDimensions(
        'https://picsum.photos/800/600',
      )
      this.state.dimensions = result
      const aspectRatio = await ImageAPI.calculateAspectRatio(
        result.width,
        result.height,
      )
      this.state.aspectRatio = aspectRatio
      console.log(aspectRatio)
      console.log('Image dimensions:', result)
    } catch {
      this.state.error = 'Failed to load image'
    } finally {
      this.state.loading = false
    }
  }
}
