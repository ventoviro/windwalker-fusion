/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2018 Asikart.
 * @license    MIT
 */

(async ($) => {
  const a = 'b';

  const result2 = await $.get('./');

  console.log(a, 'foo');
})(jQuery);
