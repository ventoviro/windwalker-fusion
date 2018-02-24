/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2018 ${ORGANIZATION}.
 * @license    __LICENSE__
 */

(($) => {
  "use strict";

  let sakura = 'flower';

  function test() {
    //
  }

  sakura += 123;

  if (sakura) {
    console.log('Test');
  }

  console.log(sakura, $('rose'));
})(jQuery);

/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2018 ${ORGANIZATION}.
 * @license    __LICENSE__
 */

// "use strict";

(async ($) => {
  const a = 'b';

  const result = await $.get('./');

  console.log(a, 'foo');
})(jQuery);

//# sourceMappingURL=yoo.js.map
