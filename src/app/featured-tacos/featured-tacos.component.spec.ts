import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedTacosComponent } from './featured-tacos.component';

describe('FeaturedTacosComponent', () => {
  let component: FeaturedTacosComponent;
  let fixture: ComponentFixture<FeaturedTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTacosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render at least four tacos with names and descriptions', () => {
    const items: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('.featured-taco-item');

    expect(items.length).toBeGreaterThanOrEqual(4);
    expect(items.length).toBe(component.featuredTacos.length);

    items.forEach((item) => {
      expect(item.querySelector('h3')?.textContent?.trim()).toBeTruthy();
      expect(
        item.querySelector('.w4-card-text')?.textContent?.trim()
      ).toBeTruthy();
    });
  });

  it('should render each taco label and numeric price', () => {
    const items: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('.featured-taco-item');

    expect(
      component.featuredTacos.every(
        (taco) =>
          taco.label.length > 0 &&
          typeof taco.price === 'number' &&
          taco.price > 0
      )
    ).toBeTrue();

    items.forEach((item, index) => {
      const badges = item.querySelectorAll('.w4-badge');

      expect(badges.length).toBe(2);
      expect(badges[0].textContent?.trim()).toBe(
        component.featuredTacos[index].label
      );
      expect(badges[1].textContent).toContain('$');
    });
  });

  it('should show Chef Pick only when a pick exists', () => {
    const getChefPick = () =>
      fixture.nativeElement.querySelector('section.w4-callout');

    expect(getChefPick()).not.toBeNull();
    expect(getChefPick().textContent).toContain("Chef's Pick");

    fixture.destroy();

    fixture = TestBed.createComponent(FeaturedTacosComponent);
    component = fixture.componentInstance;
    component.chefPick = null;
    fixture.detectChanges();

    expect(component.chefPick).toBeNull();
    expect(getChefPick()).toBeNull();
  });
});
