import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface FeaturedTaco {
  name: string;
  description: string;
  price: number;
  label: string;
}

@Component({
  selector: 'app-featured-tacos',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section>
      <p class="w4-eyebrow">Customer Favorites</p>
      <h1>Featured Tacos</h1>
      <p class="w4-page-intro">
        Check out some of our favorite tacos, made fresh with flavorful
        ingredients.
      </p>

      <ul class="w4-grid w4-grid-3">
        @for (taco of featuredTacos; track taco.name) {
          <li class="featured-taco-item">
            <article class="w4-card w4-card-tall">
              <div class="w4-card-header">
                <span class="w4-badge">{{ taco.label }}</span>
                <span class="w4-badge">{{ taco.price | currency }}</span>
              </div>
              <h3>{{ taco.name }}</h3>
              <p class="w4-card-text">{{ taco.description }}</p>
            </article>
          </li>
        }
      </ul>

      @if (chefPick) {
        <section class="w4-callout w4-mt-4">
          <div>
            <p class="w4-eyebrow">Chef's Pick</p>
            <h2>{{ chefPick.name }}</h2>
            <p>{{ chefPick.description }}</p>
            <p>
              <strong>Price: {{ chefPick.price | currency }}</strong>
            </p>
          </div>
        </section>
      }
    </section>
  `
})
export class FeaturedTacosComponent {
  featuredTacos: FeaturedTaco[] = [
    {
      name: 'Queso Birria Taco',
      description: 'Savory birria with melted cheese, cilantro, onions, and consomé.',
      price: 3.50,
      label: 'Popular'
    },
    {
      name: 'Al Pastor Taco',
      description: 'Marinated pork topped with pineapple, cilantro, and onions.',
      price: 3.25,
      label: 'Sweet and Savory'
    },
    {
      name: 'Spicy Chicken Taco',
      description: 'Seasoned chicken with spicy salsa, lettuce, and fresh tomatoes.',
      price: 3.50,
      label: 'Spicy'
    },
    {
      name: 'Veggie Taco',
      description: 'Grilled vegetables, black beans, cheese, and house salsa.',
      price: 3.25,
      label: 'Fresh'
    }
  ];

  chefPick: FeaturedTaco | null = this.featuredTacos[0] ?? null;
}
