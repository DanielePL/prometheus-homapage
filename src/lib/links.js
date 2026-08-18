/* Every outbound link to the product, in one place.
 *
 * /onboarding is the route paid traffic already converts through — "/" in the
 * coach app is behind the login and would bounce an ad click straight to a
 * password field. Do not point a CTA at the bare domain.
 */
export const APP = 'https://app.prometheus.coach'
export const SIGNUP = `${APP}/onboarding`
export const SIGNUP_STUDIO = `${APP}/onboarding?plan=studio_light`
export const PRICING = `${APP}/pricing`
export const CONTACT = 'mailto:management@prometheus.coach'
