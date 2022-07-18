using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backendApi.Models;

namespace backend
{
    [Route("api/CustomerItems")]
    [ApiController]
    public class CustomerItemsController : ControllerBase
    {
        private readonly CustomerContext _context;

        public CustomerItemsController(CustomerContext context)
        {
            _context = context;
        }

        // GET: api/CustomerItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerItem>>> GetCustomerItems()
        {
          if (_context.CustomerItems == null)
          {
              return NotFound();
          }
            return await _context.CustomerItems.ToListAsync();
        }

        // GET: api/CustomerItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerItem>> GetCustomerItem(int id)
        {
          if (_context.CustomerItems == null)
          {
              return NotFound();
          }
            var customerItem = await _context.CustomerItems.FindAsync(id);

            if (customerItem == null)
            {
                return NotFound();
            }

            return customerItem;
        }

        // PUT: api/CustomerItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerItem(int id, CustomerItem customerItem)
        {
            if (id != customerItem.id)
            {
                return BadRequest();
            }

            _context.Entry(customerItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomerItem>> PostCustomerItem(CustomerItem customerItem)
        {
          if (_context.CustomerItems == null)
          {
              return Problem("Entity set 'CustomerContext.CustomerItems'  is null.");
          }
            _context.CustomerItems.Add(new CustomerItem
            {
                id = customerItem.id,
                name = customerItem.name,
                address = customerItem.address
            });
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetCustomerItem", new { id = customerItem.Id }, customerItem);
            return CreatedAtAction(nameof(GetCustomerItem), new { id = customerItem.id}, customerItem);
        }

        // DELETE: api/CustomerItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerItem(int id)
        {
            if (_context.CustomerItems == null)
            {
                return NotFound();
            }
            var customerItem = await _context.CustomerItems.FindAsync(id);
            if (customerItem == null)
            {
                return NotFound();
            }

            _context.CustomerItems.Remove(customerItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerItemExists(int id)
        {
            return (_context.CustomerItems?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
